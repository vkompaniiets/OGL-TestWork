var Category = require('../controller/category');

module.exports = function (router) {
    router.post('/category', Category.create),
    router.get('/category/:id', Category.get),
    router.get('/category', Category.getAll),
    router.put('/category/:id', Category.update),
    router.delete('/category/:id', Category.delete)
};