const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: false,
  },
  end: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  summary: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('notification', notificationSchema);
