const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../helpers/constants');

const NotFoundError = require('../errors/not-found-error');
const NotAuthError = require('../errors/not-auth-error');
const BadRequestError = require('../errors/bad-request-error');
const ConflictError = require('../errors/conflict-error');
const MESSAGES = require('../errors/messages');

const User = require('../models/user');

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(MESSAGES.NOT_FOUND);
      }
      res.status(200).send(user);
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        throw new ConflictError(MESSAGES.CONFLICT);
      } else {
        return bcrypt.hash(req.body.password, 10);
      }
    })
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
    }))
    .then((newUser) => res.status(200).send({
      email: newUser.email,
    }))
    .catch((err) => {
      if (err.name === MESSAGES.VALIDATION) {
        throw new BadRequestError(err.message);
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { email } = req.body;
  return User.findByIdAndUpdate(req.user._id, { email }, {
    new: true,
    runValidators: true,
  })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === MESSAGES.VALIDATION || err.name === MESSAGES.CAST) {
        throw new BadRequestError(err.message);
      }
      if (err.name === MESSAGES.MONGO && err.code === 11000) {
        throw new ConflictError(MESSAGES.CONFLICT);
      }
      next(err);
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        JWT_SECRET,
        { expiresIn: '7d' },
      );
      return res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      }).send(
        { message: MESSAGES.COOKIES_CREATED },
      );
    })
    .catch((err) => {
      throw new NotAuthError(err.message);
    })
    .catch(next);
};

module.exports.signOut = (req, res) => {
  res.clearCookie('jwt').send({ message: MESSAGES.COOKIES_DELETED });
};
