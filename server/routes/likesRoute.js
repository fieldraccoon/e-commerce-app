const router = require('express').Router();
let Likes = require('../models/likes.model.js')



router.route('/').get((req,res) => {
    Likes.find()
    .then(likes => res.json(likes))
    .catch(err => res.status(400).json('Error: ' + err));

})

// router.route("/add/:id").post((req,res) => {
//     const id = req.params.id;
//     const product_name = req.body.product_name;
//     const product_description = req.body.product_description;
//     const product_price = req.body.product_price;
//     const newLike = new Likes({
//         id,
//         product_name,
//         product_description,
//         product_price,
//     });
//     newLike.save()
//     .then(() => res.json("You have liked :)"))
//     .catch(err => res.status(400).json("Error: " + err))
// })

router.route("/add/").post((req,res) => {
    const product_name = req.body.name;

    const newLike = new Likes({
        product_name,
    });
    newLike.save()
    .then(() => res.json("You have liked :)"))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;