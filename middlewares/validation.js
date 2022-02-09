const { celebrate, CelebrateError, Joi } = require('celebrate');
const { isURL, isEmail } = require('validator');
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

module.exports.eventIdValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});

module.exports.eventValidation = celebrate({
  body: Joi.object().keys({
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    name: Joi.number().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    link: Joi.string().required().custom((value) => {
      if (!isURL(value)) {
        throw new CelebrateError(MESSAGES.URL);
      }
      return value;
    }),
  }),
});
