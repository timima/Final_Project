const express = require("express");
const router = express.Router();
const Owner = require('../models/Owner');
const Post = require('../models/Post');

//Gets back all the Posts 
router.get('/register_owner',async (reg,res) => {
    try{
        const posts = await Owner.find();
        res.json({"all_owners": posts});
    }catch(err){
        res.json({message: err});
    }
});
//Submit a post
router.post("/register_owner", async(req, res) =>{
    try{
        console.log(req.body);
    const user = new Post({
        user_name: req.body.user_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    });
    const saveduser = await user.save();
    const owner = new Owner({
        user_id: saveduser._id,
        cafe_name: req.body.cafe_name,
        description: req.body.description,
        location: req.body.location
    });
    const savedPostOwner = await owner.save();
        res.json(savedPostOwner); 
    }catch(err){
        console.log(err);
        res.json({message: err});
    }
});
//Update a Post
router.patch('/:ownerId',async (req,res) => {
    try{
        const updatedPost = await Owner.updateOne(
            {_id: req.params.ownerId}, 
            {$set: {user_name: req.body.user_name}},
            {$set: {last_name: req.body.last_name}},
            {$set: {email: req.body.email}},
            {$set: {password: req.body.password}},
            {$set: {cafe_name: req.body.cafe_name}},
            {$set: {description: req.body.description}},
            {$set: {location: req.body.location}}
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;