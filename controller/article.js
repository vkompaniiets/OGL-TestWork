'use strict';

var Article = require('../models/article').Article;

exports.create = function (req, res) {
    Article.create(req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.get = function (req, res) {
    Article.get({ _id: req.params.id }, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.getAll = function (req, res) {
    Article.getAll(function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.update = function (req, res) {
    Article.updateById({ _id: req.params.id }, req.body, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
};

exports.delete = function (req, res) {
    Article.removeById({ _id: req.params.id }, function (err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err);
        }
    });
};