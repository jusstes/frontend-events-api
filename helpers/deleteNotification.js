const MESSAGES = require('../errors/messages');
const Notification = require('../models/notification');

module.exports.deleteItem = (id) => {
  Notification.findById(id)
    .then((notification) => {
      if (!notification) {
        console.log({ message: MESSAGES.NOT_FOUND });
      } else {
        Notification.findByIdAndRemove(id)
          .then(() => console.log({ message: MESSAGES.DELETED }));
      }
    });
};
