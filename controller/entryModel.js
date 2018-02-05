'use strict';

module.exports = function (collectionName) {
    collectionName.Create = function (req, res) {
        collectionName.create(req.body, function (err, result) {
            if (!err) {
                return res.json(result);
            } else {
                return res.send(err);
            }
        });
    },

    collectionName.Get = function (req, res) {
        collectionName.get({ _id: req.params.id }, function (err, result) {
            if (!err) {
                return res.json(result);
            } else {
                return res.send(err);
            }
        });
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
        collectionName.updateById({ _id: req.params.id }, req.body, function (err, result) {
            if (!err) {
                return res.json(result);
            } else {
                return res.send(err);
            }
        });
    },
    
    collectionName.Delete = function (req, res) {
        collectionName.removeById({ _id: req.params.id }, function (err, result) {
            if (!err) {
                return res.json(result);
            } else {
                console.log(err);
                return res.send(err);
            }
        });
    }
};