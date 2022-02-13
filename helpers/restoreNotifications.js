const Notification = require('../models/notification');
const Event = require('../models/event');
const { schedule } = require('./schedule');
const requestToWebStandards = require('./requests');

module.exports = () => {
  Notification.find({ completed: false })
    .then((notification) => {
      notification.forEach((item) => {
        Event.findById(item.eventId)
          .then((data) => schedule(data, item.email, item.eventId))
          .catch(() => {
            requestToWebStandards().then((data) => {
              const event = JSON.parse(data.toString())
                .find((el) => el.uid === item.eventId);
              schedule(event, item.email, item.eventId);
            });
          });
      });
    });
};
