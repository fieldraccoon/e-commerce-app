const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs")
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const productsRouter = require('./routes/createProductsRoute.js')
const likesRouter = require('./routes/likesRoute')
const checkoutRouter = require('./routes/checkoutRoute')
const publishedRouter = require('./routes/publishedRoute')

app.use(cors());
uri = process.env.ATLAS_URI 

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })



app.use('/products', productsRouter)
app.use('/likes', likesRouter)
app.use('/checkout', checkoutRouter)
app.use('/published', publishedRouter)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
 }); 