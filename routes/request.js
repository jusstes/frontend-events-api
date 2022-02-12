const requestRouter = require('express').Router();

const {
  getEventListRequests,
  approveEvent,
  rejectEvent,
  sendEventRequest,
  getListRequestedEvents,
  cancelEventRequest,
} = require('../controllers/request');

const { eventValidation, eventIdValidation } = require('../middlewares/validation');

requestRouter.get('/request', getEventListRequests);
requestRouter.post('/request', eventValidation, sendEventRequest);
requestRouter.delete('/request/:_id', eventIdValidation, cancelEventRequest);

requestRouter.get('/requests', getListRequestedEvents);
requestRouter.post('/requests/:_id', eventIdValidation, approveEvent);
requestRouter.delete('/requests/:_id', eventIdValidation, rejectEvent);

module.exports = requestRouter;
