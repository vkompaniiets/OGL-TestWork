var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categories = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        required: true
    }
});

var Categories = mongoose.model('Categories', categories);
module.exports = Categories;