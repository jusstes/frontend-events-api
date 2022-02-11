const eventRouter = require('express').Router();

const { getListEvents } = require('../controllers/events');

const { eventYearValidation } = require('../middlewares/validation');

eventRouter.get('/events', eventYearValidation, getListEvents);

module.exports = eventRouter;
