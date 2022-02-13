const schedule = require('node-schedule');
const { sendMail } = require('./email');

module.exports.schedule = ({
  start, summary, description,
}, email, date, notificationId) => {
  schedule.scheduleJob(date, () => {
    sendMail(start, summary, description, email, notificationId);
  });
};
