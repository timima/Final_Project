const router = require("express").Router();
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");

router.post("/login", async(req, res) => {
    try {
        const {username , password} = req.body;
        console.log(username, password);
        const user = await Post.findOne({ user_name: username, password});
        if (!user){
            res.json({"error" : "Invalid credentials"})
            return;
        }

        const token = jwt.sign({
           userId: user._id
        },{
            expiresIn:"9999d"
        });

        });

        res.json({ status: true, token});
    }catch(err){
        console.log(error);
        res.statusCode(501);
    }
});

module.exports = router;
