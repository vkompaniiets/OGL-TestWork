'use strict';

var Category = require('../models/category').Category;

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
    Category.get({ _id: req.params.id }, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
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
    Category.updateById({ _id: req.params.id }, req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.delete = function (req, res) {
    Category.removeById({ _id: req.params.id }, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err);
        }
    });
};
