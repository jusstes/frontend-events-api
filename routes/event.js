const eventRouter = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getEventRequests,
  getEventNotifications,
  approveEvent, rejectEvent,
  sendEventRequest,
  getListEvents,
} = require('../controllers/events');

const {
  eventIdValidation,
  eventValidation,
} = require('../middlewares/validation');

eventRouter.use(auth);
eventRouter.get('/events', getListEvents);
eventRouter.get('/scheduled', getEventNotifications);
// eventRouter.post('/scheduled/:id', login);
// eventRouter.delete('/scheduled/:id', signOut);
eventRouter.get('/request', getEventRequests);
eventRouter.post('/request', sendEventRequest);
// admin functions
eventRouter.post('/request/:id', approveEvent);
eventRouter.delete('/request/:id', rejectEvent);

module.exports = eventRouter;
