const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

(async() => {
    //Middlewares
    app.use(cors());
    //for json to work
    app.use(bodyParser.urlencoded({
        extended: true,
    }))
    app.use(bodyParser.json());
    

    //Routes
    app.get('/', (reg,res) => {
        res.send('We are on home right now');
    })

    //connect to DB
    await mongoose.connect(
        process.env.db_connection, 
        { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to DB');

    //to listen to server
    app.listen(3000, () => console.log("Serving at http://localhost:3000"));
})();