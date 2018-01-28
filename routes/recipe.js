var Recipe = require('../controller/recipe');

module.exports = function (router) {
    router.post('/recipe', Recipe.create),
    router.get('/recipe/:id', Recipe.get),
    router.get('/recipe', Recipe.getAll),
    router.put('/recipe/:id', Recipe.update),
    router.delete('/recipe/:id', Recipe.delete)
};