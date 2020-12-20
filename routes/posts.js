const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');

//Gets back all the Posts 
router.get('/',async (reg,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});
//Submits a Post
router.post('/', async (req,res) => {
    if (checkIfLogged(req.headers)){
        const post = new Post({
        user_name: req.body.user_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    });
    try{
       const savedPost = await post.save();
        res.json(savedPost); 
    }catch(err){
        res.json({message: err});
    }
    } else {
        res.json({error: "no such data"});
    }
});

//Gets specific Post
router.get('/:postId',async (req,res) =>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post); 
    }catch(err){
        res.json({message: err});
    }
    
});