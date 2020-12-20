const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('client', ClientSchema);