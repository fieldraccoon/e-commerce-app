var express = require('express');

var router = express.Router()


router.route("/").get((req,res) => {
    res.send("got checkout page")
})

module.exports = router;