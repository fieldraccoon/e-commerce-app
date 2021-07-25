const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs")
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const productsRouter = require('./routes/productsRoute.js')
const likesRouter = require('./routes/likesRoute')
const checkoutRouter = require('./routes/checkoutRoute')

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


app.listen(port, () => {
    console.log(`Running on port ${port}`)
 }); 