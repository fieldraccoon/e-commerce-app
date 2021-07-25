const router = require('express').Router();
let Likes = require('../models/likes.model.js')



router.route('/').get((req,res) => {
    Likes.find()
    .then(likes => res.json(likes))
    .catch(err => res.status(400).json('Error: ' + err));

})

module.exports = router;