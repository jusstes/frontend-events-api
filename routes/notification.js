const notificationRouter = require('express').Router();

const {
  createNotification,
  deleteNotification,
  getNotificationListRequests,
} = require('../controllers/notification');

const {
  notificationValidator,
  notificationIdValidation,
} = require('../middlewares/validation');

notificationRouter.get('/notification', getNotificationListRequests);
notificationRouter.post('/notification', notificationValidator, createNotification);
notificationRouter.delete('/notification/:_id', notificationIdValidation, deleteNotification);

module.exports = notificationRouter;
