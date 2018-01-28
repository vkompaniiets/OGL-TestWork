'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    text: {
        type: String,
        default: 'coming soon'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});

RecipeSchema.statics = {
    get: function (query, callback) {
        this.findOne(query, callback);
    },
    getAll: function (query, callback) {
        this.find(query, callback);
    },

    updateById: function (id, updateData, callback) {
        this.update(id, { $set: updateData }, callback);
    },
    removeById: function (removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function (data, callback) {
        var recipe = new this(data);
        recipe.save(callback);
    }
};

var recipe = mongoose.model('recipe', RecipeSchema);

module.exports = {
    Recipe: recipe
};