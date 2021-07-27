const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    product_name: { type: String, required: true },
    product_description: { type: String, required: true },
    product_price: { type: Number, required: true}
  }, {
    timestamps: true,
  });

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;