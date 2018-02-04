'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function (paths) {
    // Base model for recipe and article
    var EntrySchema = new Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        text: {
            type: String,
            default: 'some text'
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }
    });

    EntrySchema.statics = {
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
            var entry = new this(data);
            entry.save(callback);
        }
    };

    EntrySchema.add(paths);

    return EntrySchema;
};
