import mongoose from './../config/mongoose.js';

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, 'Name should be at least 3 chars long']
  },
  brand: {
    type: String,
    required: true,
    minlength: [3, 'Brand should be at least 3 chars long']
  },
  price: {
    type: Number,
    default: 0
  },
  options: {
    type: Array
  },
  reviews: {
    type: Array
  },
  lastModifiedDate: Date
});

productsSchema.pre('save', function(next) {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
});
export const Product = mongoose.model('Product', productsSchema);