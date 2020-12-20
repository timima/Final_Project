const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    food_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    request_status: {
        type: String,
        default: 'available right now, free of charge with expire date'
    }
});

module.exports = mongoose.model('request', RequestSchema);