var express = require('express');

var router = express.Router()

let Product = require('../models/products.model.js')

router.route("/").get((req,res) => {
    res.send("got GET request")
})

router.route("/add").post((req, res) => {

})

module.exports = router;