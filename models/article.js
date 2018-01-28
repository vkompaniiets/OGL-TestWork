'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        default: 'description'
    },
    text: {
        type: String,
        default: 'text'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});

ArticleSchema.statics = {
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
        var article = new this(data);
        article.save(callback);
    }
};

var article = mongoose.model('article', ArticleSchema);

module.exports = {
    Article: article
};