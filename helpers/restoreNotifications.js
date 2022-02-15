const Notification = require('../models/notification');
const Event = require('../models/event');
const { schedule } = require('./schedule');
const requestToWebStandards = require('./requests');

module.exports = () => {
  Notification.find({ completed: false })
    .then((notification) => {
      notification.forEach((item) => {
        Event.findById(item.eventId)
          .then((data) => schedule(data, item.email, item.date, item.eventId))
          .catch(() => {
            requestToWebStandards().then((data) => {
              const event = data.find((el) => el.uid === item.eventId);
              schedule(event, item.email, item.date, item.eventId);
            });
          });
      });
    });
};
