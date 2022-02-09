const jwt = require('jsonwebtoken');
const NotAuthError = require('../errors/not-auth-error');
const { JWT_SECRET } = require('../helpers/constants');
const MESSAGES = require('../errors/messages');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new NotAuthError(MESSAGES.NOT_AUTH);
  }

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    throw new NotAuthError(MESSAGES.NOT_AUTH);
  }
};
