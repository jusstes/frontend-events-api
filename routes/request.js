const requestRouter = require('express').Router();

const {
  getEventListRequests,
  approveEvent,
  rejectEvent,
  sendEventRequest,
  getListRequestedEvents,
} = require('../controllers/request');

const { eventValidation, eventIdValidation } = require('../middlewares/validation');

requestRouter.get('/request', getEventListRequests);
requestRouter.post('/request', eventValidation, sendEventRequest);

// TODO сделать запрос на отмену эвента пользователем, его создавшем

requestRouter.get('/requests', getListRequestedEvents);
requestRouter.post('/request/:_id', eventIdValidation, approveEvent);
requestRouter.delete('/request/:_id', eventIdValidation, rejectEvent);

module.exports = requestRouter;
