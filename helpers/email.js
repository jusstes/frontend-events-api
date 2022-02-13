const { FROM, USER, PASSWORD, SERVICE } = process.env

const nodemailer = require('nodemailer');

const mailOptions = {
  from: `${FROM}`,
  to: 'jusstes@yandex.ru',
  subject: 'Напоминание о Frontend мероприятии',
  text: 'Some content to send',
};

const transporter = nodemailer.createTransport({
  service: `${SERVICE}`,
  auth: {
    user: `${USER}`,
    pass: `${PASSWORD}`,
  },
});

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
