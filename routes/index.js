const async = require('async');
var Article = require('../models/article').Article;
var Recipe = require('../models/recipe').Recipe;
var Category = require('../models/category').Category;

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.send('Hello :)');
    });

    router.get('/api/infoAboutCategoriesOfRecipe/:id', function (req, res) {
        // по идентификатору рецепта возвращает полный перечень категорий, к которым относится указанный ресурс в порядке вложенности;
        if (req.params.id) {
            Recipe.findById(req.params.id, function (err, result) {
                if (!err) {
                    if (result) {
                        path.push(result);
                        addToPath(result.category, function (err) {
                            if (err) return res.send(err);
                            return res.json(path);
                        });
                    } else {
                        return res.send('Nothing found');
                    }
                } else {
                    return res.send(err);
                }
            });
        } else {
            return res.send('Invalid ID');
        }
    });

    router.get('/api/infoAboutCategoriesOfArticle/:id', function (req, res) {
        // по идентификатору статьи возвращает полный перечень категорий, к которым относится указанный ресурс в порядке вложенности;
        if (req.params.id) {
            Article.findById(req.params.id, function (err, result) {
                if (!err) {
                    if (result) {
                        path.push(result);
                        addToPath(result.category, function (err) {
                            if (err) return res.send(err);
                            return res.json(path);
                        });
                    } else {
                        return res.send('Nothing found');
                    }
                } else {
                    return res.send(err);
                }
            });
        } else {
            return res.send('Invalid ID');
        }
    });

    router.get('/api/findRecipeById/:id', function (req, res) {
        // по идентификатору возвращает рецепт;
        if (req.params.id) {
            Recipe.findById(req.params.id, function (err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err);
                }
            });
        } else {
            return res.send('Invalid ID');
        }
    });

    router.get('/api/findArticleById/:id', function (req, res) {
        // по идентификатору возвращает статью;
        if (req.params.id) {
            Article.findById(req.params.id, function (err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err);
                }
            });
        } else {
            return res.send('Invalid ID');
        }
    });

    router.get('/api/findAllRecipeByCategory/:id', function (req, res) {
        // по идентификатору категории возвращает полный список рецептов данной категории;
        if (req.params.id) {
            Recipe.find({ category: req.params.id }, function (err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err);
                }
            });
        } else {
            return res.send('Invalid ID');
        }
    });

    router.get('/api/findAllArticleByCategory/:id', function (req, res) {
        // по идентификатору категории возвращает полный список статей данной категории;
        if (req.params.id) {
            Article.find({ category: req.params.id }, function (err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err);
                }
            });
        } else {
            return res.send('Invalid ID');
        }
    });

    router.get('/api/infoAboutCategory/:id', function (req, res) {
        // по идентификатору категории возвращает полный перечень категорий, к которым относится указанный ресурс, в порядке вложенности;        
        if (req.params.id) {
            addToPath(req.params.id, function (err) {
                if (err) return res.send(err);
                return res.json(path);
            });
        } else {
            return res.send('Invalid ID');
        }
    });

    var path = [];

    function addToPath(id, callback) {
        Category.findOne({ _id: id }, function (err, item) {
            if (err || !item) {
                return callback(err);
            }
            path.push(item);
            if (item.mainCategory !== null) {
                addToPath(item.mainCategory, callback);
            }
            else {
                callback();
            }
        });
    }
}