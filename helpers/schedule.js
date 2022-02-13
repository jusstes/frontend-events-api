const { sendMail } = require('./email');
const { deleteItem } = require('./deleteNotification');

// TODO при ребуте приложения пройтись по коллекции и запланировать уведомления заново
module.exports.schedule = ({
  start, summary, description,
}, email, notificationId) => {
  // sendMail(start, summary, description, email);
  // deleteItem(notificationId);
};
