var express = require('express');

var router = express.Router()

let Product = require('../models/products.model.js')

router.route("/").get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/add").post((req, res) => {

    const product_name = req.body.product_name
    const product_description = req.body.product_description
    const product_price = req.body.product_price

    console.log(product_name, product_description, product_price)

    const newProduct = new Product({
        product_name,
        product_description,
        product_price
    });
    newProduct.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})



router.route("/results").get((req, res) => {
    Product.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;