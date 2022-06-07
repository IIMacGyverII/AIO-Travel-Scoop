const mongoose = require('mongoose');
const { PreviousSearches } = require('.');

const { Schema } = mongoose;

const previousSearchesSchema = new Schema({
  previousSearches: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Order = mongoose.model('PreviousSearches', previousSearchesSchema);

module.exports = PreviousSearches;
