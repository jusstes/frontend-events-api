const mongoose = require('mongoose');
const validator = require('validator');

const eventSchema = new mongoose.Schema({
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: 'Ссылка введена неверно',
    },
  },
  allDay: {
    type: Boolean,
    required: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: false,
  },
});

module.exports = mongoose.model('event', eventSchema);
