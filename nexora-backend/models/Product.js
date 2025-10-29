const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  desc: String
});

module.exports = mongoose.model('Product', productSchema);
