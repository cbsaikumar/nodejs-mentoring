import * as mongoose from './../config/mongoose';

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

productsSchema.pre('save', (next) => {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
});
module.exports = mongoose.model('Product', productsSchema);