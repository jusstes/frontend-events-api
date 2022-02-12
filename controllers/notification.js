const Notification = require('../models/notification');
const MESSAGES = require('../errors/messages');
const Forbidden = require('../errors/forbidden-error');
const NotFoundError = require('../errors/not-found-error');

module.exports.createNotification = (req, res) => {
  const { eventId, date, time } = req.body;
  Notification.create({
    eventId, date, time, owner: req.user._id,
  })
    .then((notification) => res.send(notification))
    .catch((err) => res.send(err));
};

module.exports.deleteNotification = (req, res, next) => {
  const id = req.user._id;
  Notification.findById(req.params._id)
    .then((notification) => {
      if (!notification) {
        throw new NotFoundError(MESSAGES.NOT_FOUND);
      }
      if (notification.owner.toString() !== id) {
        throw new Forbidden(MESSAGES.FORBIDDEN);
      } else {
        Notification.findByIdAndRemove(req.params._id)
          .then(() => res.send({ message: MESSAGES.DELETED }));
      }
    })
    .catch(next);
};

module.exports.getNotificationListRequests = (req, res, next) => {
  const owner = req.user._id;
  Notification.find({ owner })
    .then((events) => res.send(
      events.length
        ? events
        : { message: MESSAGES.NOT_FOUND_NOTIFICATIONS },
    ))
    .catch(next);
};
