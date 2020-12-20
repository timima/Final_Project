const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const Request = require('../models/Request');
const mongoose = require("mongoose");
const { checkIfLogged, getUserId } = require("../utils/tokenParser");
const Client = require("../models/Client");

//Gets back all the Posts 
router.get('/',async (reg,res) => {
    try{
        const posts = await Request.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});
//Submits a Post
router.post('/create_request', async (req,res) => {
    if (checkIfLogged(req.headers)){
        const userId = getUserId(req.headers);
        const client = await Client.findOne({user_id: userId});
        const post = new Request({
        owner_id: mongoose.Types.ObjectId(req.body.owner_id),
        client_id: client._id,
        food_id: mongoose.Types.ObjectId(req.body.food_id),
        request_status: "pending",
    });
    try{
       const savedRequest = await post.save();
        res.json(savedRequest); 
    }catch(err){
        res.json({message: err});
    }
    } else {
        res.json({error: "no such data"});
    }
});
//Update a Post
router.patch('/:requestId',async (req,res) => {
    try{
        const updatedRequest = await Request.updateOne(
            {_id: req.params.postId}, 
            {$set: {owner_id: req.body.owner_id}},
            {$set: {client_id: req.body.client_id}},
            {$set: {food_id: req.body.food_id}},
            {$set: {request_status: req.body.request_status}}
        );
        res.json(updatedRequest);
    }catch(err){
        res.json({message: err});
    }
    
});
module.exports = router;