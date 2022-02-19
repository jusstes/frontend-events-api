const Request = require('../models/request');
const MESSAGES = require('../errors/messages');
const BadRequestError = require('../errors/bad-request-error');
const Forbidden = require('../errors/forbidden-error');
const NotFoundError = require('../errors/not-found-error');
const User = require('../models/user');
const Event = require('../models/event');

module.exports.getEventListRequests = (req, res, next) => {
  const owner = req.user._id;
  Request.find({ owner })
    .then((events) => res.send(events))
    .catch(next);
};

module.exports.sendEventRequest = (req, res, next) => {
  const {
    start, end, summary, location, description, link, allDay,
  } = req.body;
  Request.create({
    start, end, summary, location, description, link, allDay, owner: req.user._id,
  })
    .then((newRequest) => res.send(newRequest))
    .catch((err) => {
      if (err.name === MESSAGES.VALIDATION) {
        throw new BadRequestError(err.message);
      }
      next(err);
    })
    .catch(next);
};

module.exports.getListRequestedEvents = (req, res, next) => {
  const { _id } = req.user;
  User.findById({ _id })
    .then((user) => {
      if (user.role === 'admin') {
        Request.find({})
          .then((events) => res.send(events))
          .catch(next);
      } else {
        throw new Forbidden(MESSAGES.FORBIDDEN);
      }
    })
    .catch(next);
};

module.exports.approveEvent = (req, res, next) => {
  User.findById(req.user._id).then((user) => {
    if (user.admin) {
      const { _id } = req.params;
      Request.findOne({ _id })
        .then((data) => {
          if (data) {
            const {
              start, end, summary, location, description, link, allDay, owner,
            } = data;
            Event.create({
              start, end, summary, location, description, link, allDay, owner,
            }).then(() => {
              Request.findOneAndRemove({ _id })
                .then(() => res.send({ message: MESSAGES.EVENT_APPROVED }));
            }).catch((err) => res.send(err));
          } else {
            throw new NotFoundError(MESSAGES.NOT_FOUND);
          }
        }).catch(next);
    } else {
      throw new Forbidden(MESSAGES.FORBIDDEN);
    }
  }).catch(next);
};

module.exports.rejectEvent = (req, res, next) => {
  User.findById(req.user._id).then((user) => {
    if (user.admin) {
      const { _id } = req.params;
      Request.findById({ _id })
        .then((event) => {
          if (!event) {
            throw new NotFoundError(MESSAGES.NOT_FOUND);
          } else {
            return event.remove()
              .then(() => res.send({ message: MESSAGES.EVENT_DECLINED }))
              .catch(next);
          }
        }).catch(next);
    } else {
      throw new Forbidden(MESSAGES.FORBIDDEN);
    }
  }).catch(next);
};

module.exports.cancelEventRequest = (req, res, next) => {
  const userId = req.user._id;
  const id = req.params._id;
  Request.findById(id)
    .then((request) => {
      if (!request) {
        throw new NotFoundError(MESSAGES.NOT_FOUND);
      }
      if (request.owner.toString() !== userId) {
        throw new Forbidden(MESSAGES.FORBIDDEN);
      } else {
        Request.findByIdAndRemove(req.params._id)
          .then(() => res.send({ message: MESSAGES.DELETED }));
      }
    })
    .catch(next);
};
