import mongoose from './../config/mongoose.js';

const Schema = mongoose.Schema;

const citiesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  capital: {
    type: Boolean,
    default: false
  },
  location: {
    lat: {
      type: Number,
      default: 0
    },
    long: {
      type: Number,
      default: 0
    } 
  },
  lastModifiedDate: Date
});

citiesSchema.pre('save', (next) => {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
})

export const City = mongoose.model('City', citiesSchema);