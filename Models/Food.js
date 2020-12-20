const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
    type_of_food: {
        type: String,
        default: 'breakfast, lunch, dinner'
    },
    category_of_food: {
        type: String,
        default: 'bread, meals, groceries, drinks, pastries'
    },
    expire_date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    prices: {
        type: String
    }
});
module.exports = mongoose.model('food', FoodSchema);