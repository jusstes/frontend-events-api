const { celebrate, CelebrateError, Joi } = require('celebrate');
const { isURL, isEmail, isDate } = require('validator');
const MESSAGES = require('../errors/messages');

module.exports.userInfoValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom((value) => {
      if (!isEmail(value)) {
        throw new CelebrateError(MESSAGES.EMAIL);
      }
      return value;
    }),
  }),
});

module.exports.loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom((value) => {
      if (!isEmail(value)) {
        throw new CelebrateError(MESSAGES.EMAIL);
      }
      return value;
    }),
    password: Joi.string().min(8).required(),
  }),
});

module.exports.userValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom((value) => {
      if (!isEmail(value)) {
        throw new CelebrateError(MESSAGES.EMAIL);
      }
      return value;
    }),
    password: Joi.string().min(8).required(),
  }),
});

module.exports.eventYearValidation = celebrate({
  query: Joi.object().keys({
    year: Joi.string().required().length(4),
  }),
});

module.exports.eventIdValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
});

module.exports.notificationValidator = celebrate({
  body: Joi.object().keys({
    uid: Joi.string(),
    id: Joi.string(),
    date: Joi.string().required().length(24),
  }),
});

module.exports.notificationIdValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required(),
  }),
});

module.exports.eventValidation = celebrate({
  body: Joi.object().keys({
    start: Joi.string().required(),
    end: Joi.string().required(),
    summary: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required().custom((value) => {
      if (!isURL(value)) {
        throw new CelebrateError(MESSAGES.URL);
      }
      return value;
    }),
  }),
});
