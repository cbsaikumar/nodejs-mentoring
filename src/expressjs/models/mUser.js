import mongoose from './../config/mongoose.js';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [3, 'Username should be at least 3 chars long']
  },
  email: {
    type: String,
    required: true,
    minlength: [5, 'Email should be at least 5 chars long'],
    validate: {
      validator(val) {
        return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val);
      },
      message: '{VALUE} is invalid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [5, 'Password should be at least 5 chars long'],
    maxlength: [20, 'Password cannot exceed 20 chars long']
  },
  lastModifiedDate: Date
});

usersSchema.pre('save', function(next) {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
});


export const User = mongoose.model('User', usersSchema);