var express = require('express');

var router = express.Router()


router.route("/").get((req,res) => {
    res.send("got GET request")
})

module.exports = router;