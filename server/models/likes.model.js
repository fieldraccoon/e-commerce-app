const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const likesSchema = new Schema({
    product_name: { type: String, required: true },
    product_description: { type: String, required: true },
  }, {
    timestamps: true,
  });

const Likes = mongoose.model('Likes', likesSchema);

module.exports = Likes;
