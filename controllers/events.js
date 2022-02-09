const BadRequestError = require('../errors/bad-request-error');
const NotFoundError = require('../errors/not-found-error');
const Forbidden = require('../errors/forbidden-error');
const Event = require('../models/event');
const MESSAGES = require('../errors/messages');
const requestToWebStandards = require('../helpers/requests');

module.exports.getListEvents = (req, res) => {
  const year = Number(req.url.slice(-4));
  if (Number.isNaN(year)) throw new BadRequestError('Номер года передан неверно');

  requestToWebStandards().then((data) => {
    const filteredEvents = JSON.parse(data.toString()).filter((item) => item.start.startsWith(year.toString()));
    res.send(filteredEvents);
  });
};

module.exports.getEventRequests = (req, res, next) => {
  const owner = req.user._id;
  Event.find({ owner })
    .then((events) => res.send(events))
    .catch(next);
};

module.exports.sendEventRequest = (req, res, next) => {
  const {
    startDate, endDate, name, location, description, link,
  } = req.body;
  console.log(startDate, endDate, name, location, description, link);
  Event.find({})
    .then((newRequest) => res.send(newRequest))
    .catch(next);
};

module.exports.getEventNotifications = (req, res, next) => {
  const owner = req.user._id;
  Event.find({ owner })
    .then((events) => res.send(events))
    .catch(next);
};

module.exports.approveEvent = (req, res, next) => {
  const {
    startDate, endDate, name, location, description, link,
  } = req.body;
  Event.create({
    startDate,
    endDate,
    name,
    location,
    description,
    link,
    owner: req.user._id,
  })
    .then((newEvent) => res.send(newEvent))
    .catch((err) => {
      if (err.name === MESSAGES.VALIDATION) {
        throw new BadRequestError(err.message);
      }
      next(err);
    })
    .catch(next);
};

module.exports.rejectEvent = (req, res, next) => {
  const { id } = req.event;
  Event.findById(req.params.id)
    .then((event) => {
      if (!event) {
        throw new NotFoundError(MESSAGES.NOT_FOUND);
      }
      if (event.owner.toString() !== id) {
        throw new Forbidden(MESSAGES.FORBIDDEN);
      } else {
        return event.remove()
          .then((deletedEvent) => res.send(deletedEvent))
          .catch(next);
      }
    })
    .catch(next);
};
