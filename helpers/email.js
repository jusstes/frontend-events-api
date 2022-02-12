const nodemailer = require('nodemailer');

const mailOptions = {
  from: '<FROM_EMAIL_ADDRESS>',
  to: '<TO_EMAIL_ADDRESS>',
  subject: 'Напоминание о Frontend-мероприятии',
  text: 'Some content to send',
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '<FROM_EMAIL_ADDRESS>',
    pass: '<FROM_EMAIL_PASSWORD>',
  },
});

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
