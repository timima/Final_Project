const express = require("express");
const router = express.Router();
const Client = require('../models/Client');
const Post = require('../models/Post');

//Gets back all the Posts 
router.get('/register_client',async (reg,res) => {
    try{
        const posts = await Client.find();
        res.json({"all_clients": posts});
    }catch(err){
        res.json({message: err});
    }
});
//Submit a post
router.post("/register_client", async(req, res) =>{
    try{
        console.log(req.body);
    const user = new Post({
        user_name: req.body.user_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    });
    const saveduser = await user.save();
    const client = new Client({
        user_id: saveduser._id,
        location: req.body.location
    });
    const savedPostClient = await client.save();
        res.json(savedPostClient); 
    }catch(err){
        console.log(err);
        res.json({message: err});
    }
});
module.exports = router;