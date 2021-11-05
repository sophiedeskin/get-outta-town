const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const tripSchema = new Schema({
  tripCountry: {
    type: String,
    required: 'You need to leave a country!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  tripCity: {
    type: String,
    required: 'You need to leave a city!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  tripDesc: {
    type: String,
    required: 'You need to leave a description!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  tripDuration: {
    type: String,
    required: 'You need to leave a duration!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  tripImg: {
    type: String,
    required: 'You need to leave a image link!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: (timestamp) => dateFormat(timestamp),
  },
  users:
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;