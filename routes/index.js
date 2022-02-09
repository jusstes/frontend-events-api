const router = require('express').Router();
const mongoose = require('mongoose');
const { MONGO } = require('../helpers/constants');
const NotFoundError = require('../errors/not-found-error');
const MESSAGES = require('../errors/messages');
const userRouter = require('./user');
const eventRouter = require('./event');

mongoose.connect(MONGO, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

router.use(userRouter);
router.use(eventRouter);

router.use('*', () => {
  throw new NotFoundError(MESSAGES.NOT_FOUND_ROUTER);
});

module.exports = router;
