'use strict';

var Recipe = require('../models/recipe').Recipe;

exports.create = function (req, res) {
    Recipe.create(req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.get = function (req, res) {
    Recipe.get({ _id: req.params.id }, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.getAll = function (req, res) {
    Recipe.getAll(function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.update = function (req, res) {
    Recipe.updateById({ _id: req.params.id }, req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.delete = function (req, res) {
    Recipe.removeById({ _id: req.params.id }, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err);
        }
    });
};