'use strict';

var Id = require('valid-objectid');
var category = require('../models/category').Category;

module.exports = function (collectionName) {
    collectionName.Create = function (req, res) {
        var id = req.body.category;
        // проверяем id категории, к которой прицепим запись
        if (!Id.isValid(id)) {
            res.status(422);
            return res.send('Invalid ID');
        } else {
            // verification of the category 
            category.findById(req.body.category, function (err, result) {
                if (!err && result) {
                    collectionName.create(req.body, function (err, result) {
                        if (!err) {
                            return res.json(result);
                        } else {
                            return res.send(err);
                        }
                    });
                } else {
                    return res.send('The category with this ID does not exist');
                }
            });
        }
    },

    collectionName.Get = function (req, res) {
        var id = req.params.id;
 
        if (!Id.isValid(id)) {
            res.status(422);
            return res.send('Invalid ID');
        } else {
            collectionName.get({ _id: req.params.id }, function (err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err);
                }
            });
        }
    },
    
    collectionName.GetAll = function (req, res) {
        collectionName.getAll(function (err, result) {
            if (!err) {
                return res.json(result);
            } else {
                return res.send(err);
            }
        });
    },
    
    collectionName.Update = function (req, res) {
        var id = req.params.id;

        if (!Id.isValid(id)) {
            res.status(422);
            return res.send('Invalid ID');
        } else {
            // verification of the category 
            category.findById(req.body.category, function (err, result) {
                if (!err && result) {
                    collectionName.updateById({_id: req.params.id}, req.body, function (err, result) {
                        if (!err) {
                            return res.json(result);
                        } else {
                            return res.send(err);
                        }
                    });
                } else {
                    return res.send('The category with this ID does not exist');
                }
            });
        }
    },
    
    collectionName.Delete = function (req, res) {
        var id = req.params.id;
 
        if (!Id.isValid(id)) {
            res.status(422);
            return res.send('Invalid ID');
        } else {
            collectionName.removeById({ _id: req.params.id }, function (err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err);
                }
            });
        }
    }
};