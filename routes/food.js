const express = require("express");
const router = express.Router();
const Food = require('../models/Food');
const jwt = require("jsonwebtoken");
const checkIfLogged = require("../utils/tokenParser");

//Gets back all the Posts 
router.get('/',async (reg,res) => {
    try{
        const posts = await Food.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});
//Submits a Post
router.post('/',async (req,res) => {
        if (checkIfLogged(req.headers)){
        const food = new Food({
            type_of_food: req.body.type_of_food,
            category_of_food: req.body.category_of_food,
            expire_date: req.body.expire_date,
            description: req.body.description,
            prices: req.body.prices
        });
        try{
        const savedPostFood = await food.save();
            res.json(savedPostFood); 
        }catch(err){
            res.json({message: err});
        }
    } else {
        res.json({error: "no such data"});
    }
});
//Update a Post
router.patch('/:foodId',async (req,res) => {
    try{
        const updatedPost = await Food.updateOne(
            {_id: req.params.foodId}, 
            {$set: {type_of_food: req.body.type_of_food}},
            {$set: {category_of_food: req.body.category_of_food}},
            {$set: {expire_date: req.body.expire_date}},
            {$set: {description: req.body.description}},
            {$set: {prices: req.body.prices}}
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});
module.exports = router;