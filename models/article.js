'use strict';

var mongoose = require('mongoose');
var base = require('./entryModel');

var ArticleSchema = new base({
    description: {
        type: String,
        default: 'description',
        required: [true, 'Description required'],
        minlength: 4, maxlength: 255
    }
});

var article = mongoose.model('article', ArticleSchema);

module.exports = {
    Article: article
};