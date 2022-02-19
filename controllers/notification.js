const Notification = require('../models/notification');
const MESSAGES = require('../errors/messages');
const NotFoundError = require('../errors/not-found-error');
const { schedule } = require('../helpers/schedule');
const Event = require('../models/event');
const requestToWebStandards = require('../helpers/requests');
const User = require('../models/user');
const BadRequestError = require('../errors/bad-request-error');

module.exports.createNotification = (req, res) => {
  // TODO проверить, что дата больше текущей
  const {
    uid, id, date,
  } = req.body;
  if (!uid && !id) throw new BadRequestError();

  let email;
  const userId = req.user._id;

  User.findById(userId).then((user) => {
    email = user.email;
  });

  const getEventData = () => {
    if (id) return Event.findById(id).then((data) => data);
    return requestToWebStandards().then((data) => data.find((item) => item.uid === uid));
  };

  getEventData().then((data) => {
    Notification.create({
      eventId: uid || id, date, owner: req.user._id, email, summary: data.summary,
    })
      .then((notification) => {
        schedule(data, email, date, notification._id);
        res.send({ message: MESSAGES.NOTIFICATION_CREATED });
      })
      .catch((err) => res.send(err));
  });
};

module.exports.deleteNotification = (req, res, next) => {
  Notification.findById(req.params._id)
    .then((notification) => {
      if (!notification) {
        throw new NotFoundError(MESSAGES.NOT_FOUND);
      } else {
        Notification.findByIdAndRemove(req.params._id)
          .then(() => res.send({ message: MESSAGES.DELETED }));
      }
    })
    .catch(next);
};

module.exports.getNotificationListRequests = (req, res, next) => {
  // Notification.deleteMany({}).then(() => res.send({ message: MESSAGES.DELETED }));
  const owner = req.user._id;
  Notification.find({ owner })
    .then((events) => res.send(
      events.length
        ? events
        : { message: MESSAGES.NOT_FOUND_NOTIFICATIONS },
    ))
    .catch(next);
};
