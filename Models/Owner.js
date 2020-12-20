const OwnerSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cafe_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    available_food: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    }],
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('owner', OwnerSchema);