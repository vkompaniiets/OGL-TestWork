'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    mainCategory: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
});

CategorySchema.statics = {
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
        var category = new this(data);
        category.save(callback);
    }
};

var category = mongoose.model('category', CategorySchema);

module.exports = {
    Category: category
};