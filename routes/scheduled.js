const scheduleRouter = require('express').Router();

const {
  createNotification,
  deleteNotification,
  getNotificationListRequests,
} = require('../controllers/schedule');

const {
  notificationValidator,
  notificationIdValidation,
} = require('../middlewares/validation');

scheduleRouter.get('/scheduled', getNotificationListRequests);
scheduleRouter.post('/scheduled', notificationValidator, createNotification);
scheduleRouter.delete('/scheduled/:_id', notificationIdValidation, deleteNotification);

module.exports = scheduleRouter;
