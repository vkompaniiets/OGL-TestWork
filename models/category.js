'use strict';

var mongoose = require('mongoose');
var MpathPlugin = require('mongoose-mpath');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

CategorySchema.plugin(MpathPlugin);

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
    // TODO: delete tree
    removeById: function (removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function (data, callback) {
        console.log(data);
        var category = new this({ 
            name: data.name,
            mainCategory: data.mainCategory,
            parent: data.mainCategory });
        category.save(callback);
    }
};

var category = mongoose.model('category', CategorySchema);

module.exports = {
    Category: category
};