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
                        // находим категорию к которой пренадлежит рецепт
                        Category.findById(result.category, function (err, result2) {
                            if (!err) {
                                // получаем всех предков
                                result2.getAncestors({}, function (error, ancestors) {
                                    if (!error) {
                                        // добавляем текущий рецепт и категорию в список
                                        ancestors.push(result2);
                                        ancestors.push(result);
                                        return res.json(ancestors);
                                    } else {
                                        return res.send(error);
                                    }
                                });
                            } else {
                                return res.send(err);
                            }
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
                        Category.findById(result.category, function (err, result2) {
                            if (!err) {
                                result2.getAncestors({}, function (error, ancestors) {
                                    if (!error) {
                                        // добавляем текущую категорию и статью в список
                                        ancestors.push(result2);
                                        ancestors.push(result);
                                        return res.json(ancestors);
                                    } else {
                                        return res.send(error);
                                    }
                                });
                            } else {
                                return res.send(err);
                            }
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
        Category.findById(req.params.id, function (err, result) {
            if (!err) {
                // в найденной категории получаем её предков
                result.getAncestors({}, function (error, ancestors) {
                    if (!error) {
                        // пихаем текущую категории в список
                        ancestors.push(result);
                        return res.json(ancestors);
                    } else {
                        return res.send(error);
                    }
                });
            } else {
                return res.send(err);
            }
        });
    });
}