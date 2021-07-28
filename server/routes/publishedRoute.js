var express = require('express');
var Product = require('../models/products.model.js')
var router = express.Router()


router.route("/").get((req,res) => {
    Product.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;