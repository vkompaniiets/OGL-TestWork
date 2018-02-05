'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function (paths) {
    // Base model for recipe and article
    var EntrySchema = new Schema({
        name: {
            type: String,
            unique: true,
            required: [true, 'Need a name'],
            minlength: 3, 
            maxlength: 64
        },
        text: {
            type: String,
            default: 'some text',
            required: [true, 'This field required'],
            minlength: 8, maxlength: 255
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category',
            required: [true, 'This field required']
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
