'use strict';

var mongoose = require('mongoose');
var base = require('./entryModel');

// In the future, new fields can be added. Save in 'recipe' collections, not in 'entry' (or 'article').
var RecipeSchema = new base({ });

var recipe = mongoose.model('recipe', RecipeSchema);

module.exports = {
    Recipe: recipe
};