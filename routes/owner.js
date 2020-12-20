const express = require("express");
const router = express.Router();
const Owner = require('../models/Owner');

//Gets back all the Posts 
router.get('/',async (reg,res) => {
    try{
        const posts = await Owner.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});
//Submits a Post
router.post('/',async (req,res) => {
    const post = new Owner({
        user_id: req.body.user_id,
        cafe_name: req.body.cafe_name,
        description: req.body.description,
        prices: req.body.prices,
        available_food: req.body.available_food,
        location: req.body.location
    });
    try{
       const savedPostOwner = await post.save();
        res.json(savedPostOwner); 
    }catch(err){
        res.json({message: err});
    }
    
});
//Gets specific Post
router.get('/:ownerId',async (req,res) =>{
    try{
        const post = await Owner.findById(req.params.ownerId);
        res.json(post); 
    }catch(err){
        res.json({message: err});
    }
    
});
module.exports = router;