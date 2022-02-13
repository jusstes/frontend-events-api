const { sendMail } = require('./email');

module.exports.schedule = ({
  start, summary, description,
}, email) => {
  sendMail(start, summary, description, email);
};
