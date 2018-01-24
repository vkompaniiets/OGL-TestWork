var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipes = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        required: true
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    }],
    text: {
        type: String,
        required: true
    }
});

var Recipes = mongoose.model('Recipes', recipes);
module.exports = Recipes;