var article = require('../models/article').Article;
require('../controller/entryModel')(article);

module.exports = function (router) {
    router.post('/article', article.Create),
    router.get('/article/:id', article.Get),
    router.get('/article', article.GetAll),
    router.put('/article/:id', article.Update),
    router.delete('/article/:id', article.Delete)
};