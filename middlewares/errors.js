const MESSAGES = require('../errors/messages');

module.exports.errorsHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode)
    .send({
      error: statusCode === 500
        ? MESSAGES.SERVER
        : message,
    });
  next();
};
