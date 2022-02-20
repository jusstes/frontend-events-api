const schedule = require('node-schedule');
const { sendMail } = require('./email');

const scheduledObject = {};

module.exports.schedule = ({
  start, summary, description,
}, email, date, notificationId) => {
  scheduledObject[notificationId] = schedule.scheduleJob(date, () => {
    sendMail(start, summary, description, email, notificationId);
  });
};

module.exports.cancelSchedule = (notificationId) => {
  schedule.cancelJob(scheduledObject[notificationId]);
};
