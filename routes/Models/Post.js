const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    
    user_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('user', PostSchema);