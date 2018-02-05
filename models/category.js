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
    removeById: function (removeData, callback) {
        this.findOne(removeData, function (err, result) {
            if (!err && result) {
                category.find({ parent: removeData }, function (err, res) {
                    if (!err && res) {
                        // raise the child in the hierarchy
                        res.forEach(function (item) {
                            item.parent = result.parent;
                            item.save();
                        });
                        category.remove(removeData, callback);
                    } else {
                        category.remove(removeData, callback);
                    }
                });
            } else {
                category.remove(removeData, callback);
            }
        });
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