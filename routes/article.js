var Article = require('../controller/article');

module.exports = function (router) {
    router.post('/article', Article.create),
    router.get('/article/:id', Article.get),
    router.get('/article', Article.getAll),
    router.put('/article/:id', Article.update),
    router.delete('/article/:id', Article.delete)
};