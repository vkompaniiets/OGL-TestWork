var recipe = require('../models/recipe').Recipe;
require('../controller/entryModel')(recipe);

module.exports = function (router) {
    router.post('/recipe', recipe.Create),
    router.get('/recipe/:id', recipe.Get),
    router.get('/recipe', recipe.GetAll),
    router.put('/recipe/:id', recipe.Update),
    router.delete('/recipe/:id', recipe.Delete)
};