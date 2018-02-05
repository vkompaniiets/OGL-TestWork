var express = require('express');
var bodyParser = require('body-parser');
var db = require('./config/db');

var app = express();
app.use(function(req,res,next){
    req.db = db;
    next();
});
var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

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


/*
- 1) отсутствует валидация;
- 2) отсутствует документация (ну или хоть какое-то описание);
*/