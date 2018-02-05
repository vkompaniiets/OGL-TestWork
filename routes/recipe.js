var recipe = require('../models/recipe').Recipe;
require('../controller/entryModel')(recipe);

// Роутинг для рецептов, испольющий базовый контроллер для записи, в который передается название нужной коллекции
module.exports = function (router) {
    router.post('/recipe', recipe.Create),
    router.get('/recipe/:id', recipe.Get),
    router.get('/recipe', recipe.GetAll),
    router.put('/recipe/:id', recipe.Update),
    router.delete('/recipe/:id', recipe.Delete)
};