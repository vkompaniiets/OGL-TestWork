'use strict';

var Category = require('../models/category').Category;
var Id = require('valid-objectid');

exports.create = function (req, res) {
    Category.create(req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.get = function (req, res) {
    var id = req.params.id;

    if (!Id.isValid(id)) {
        res.status(422);
        return res.send('Invalid ID');
    } else {
        Category.get({ _id: req.params.id }, function (err, result) {
            if (!err) {
                return res.json(result);
            } else {
                return res.send(err);
            }
        });
    }
};

exports.getAll = function (req, res) {
    Category.getAll(function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.update = function (req, res) {
    var id = req.params.id;

    if (!Id.isValid(id)) {
        res.status(422);
        return res.send('Invalid ID');
    } else {
        Category.updateById({ _id: req.params.id }, req.body, function (err, result) {
            if (!err) {
                return res.json(result);
            } else {
                return res.send(err);
            }
        });
    }
};

exports.delete = function (req, res) {
    var id = req.params.id;

    if (!Id.isValid(id)) {
        res.status(422);
        return res.send('Invalid ID');
    } else {
        Category.removeById({ _id: req.params.id }, function (err, result) {
            if (!err) {
                return res.json(result);
            } else {
                console.log(err);
                return res.send(err);
            }
        });
    }
};
