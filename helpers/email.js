const {
  FROM, PASSWORD, SERVICE,
} = process.env;

const nodemailer = require('nodemailer');
const moment = require('moment');
const { layout } = require('./layout');
const { deleteItem } = require('./deleteNotification');

module.exports.sendMail = (start, summary, link, TO, notificationId) => {
  const date = moment(start).utc().format('DD/MM/YYYY');

  const htmlContent = layout({
    date,
    summary,
    link,
  });

  const mailOptions = {
    from: `${FROM}`,
    to: `${TO}`,
    subject: 'Напоминание о Frontend мероприятии',
    html: `${htmlContent}`,
  };

  const transporter = nodemailer.createTransport({
    service: `${SERVICE}`,
    auth: {
      user: `${FROM}`,
      pass: `${PASSWORD}`,
    },
  });

  // TODO добавить логирование
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      deleteItem(notificationId);
    }
  });
};
