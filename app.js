var express = require('express');
var bodyParser = require('body-parser');
var db = require('./config/db'); // подключаем нашу БД с нужной конфигурацией

var app = express();
app.use(function(req,res,next){
    req.db = db;
    next();
});
var router = express.Router();
// используем парсер для разбора передаваемых параметров в запросе
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// связываем весь роутинг воедино
require('./routes/index')(router);
require('./routes/recipe')(router);
require('./routes/category')(router);
require('./routes/article')(router);

// return an error 404 if nothing is found on request
router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(router);
app.listen(3001);
console.log('App started on port 3001');
module.exports = app;
