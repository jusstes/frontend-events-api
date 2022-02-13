const {
  FROM, PASSWORD, SERVICE,
} = process.env;

const nodemailer = require('nodemailer');
const moment = require('moment');
const { layout } = require('./layout');

module.exports.sendMail = (start, summary, link, TO) => {
  console.log(start, summary, link, TO);
  const date = moment(start).utc().format('DD/MM/YYYY');
  const time = moment(start).utc().format('h:mm');

  const textContent = layout({
    date,
    time,
    summary,
    link,
  });

  const mailOptions = {
    from: `${FROM}`,
    to: `${TO}`,
    subject: 'Напоминание о Frontend мероприятии',
    text: `${textContent}`,
  };

  const transporter = nodemailer.createTransport({
    service: `${SERVICE}`,
    auth: {
      user: `${FROM}`,
      pass: `${PASSWORD}`,
    },
  });

  // TODO добавить логирование
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log(`Email sent: ${info.response}`);
  //   }
  // });
};
