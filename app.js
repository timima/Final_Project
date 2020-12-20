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
    
    // Import Routes
    const postsRoute = require('./routes/posts');
    app.use('/posts', postsRoute);

    const foodRoute = require('./routes/food');
    app.use('/food', foodRoute);

    const register_ownerRoute = require('./routes/register_owner');
    app.use('/', register_ownerRoute);

    const register_clientRoute = require('./routes/register_client');
    app.use('/', register_clientRoute);


    //Routes
    app.get('/', (reg,res) => {
        res.send('We are on home right now');
    })

    const foodRoute = require('./routes/food');
    app.use('/food', foodRoute);

    //connect to DB
    await mongoose.connect(
        process.env.db_connection, 
        { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to DB');

    //to listen to server
    app.listen(3000, () => console.log("Serving at http://localhost:3000"));
})();