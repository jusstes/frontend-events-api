const router = require('express').Router();
const mongoose = require('mongoose');
const { MONGO } = require('../helpers/constants');
const NotFoundError = require('../errors/not-found-error');
const MESSAGES = require('../errors/messages');
const userRouter = require('./user');
const eventRouter = require('./event');
const requestRouter = require('./request');
const scheduleRouter = require('./scheduled');
const auth = require('../middlewares/auth');

mongoose.connect(MONGO, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

router.use(eventRouter);
router.use(userRouter);

router.use(auth);

router.use(requestRouter);
router.use(scheduleRouter);

router.use('*', () => {
  throw new NotFoundError(MESSAGES.NOT_FOUND_ROUTER);
});

module.exports = router;
