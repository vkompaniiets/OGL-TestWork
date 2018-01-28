var express = require('express');
var bodyParser = require('body-parser');

var db = require('./config/db');

var routes = require('./routes/index');
var recipe = require('./routes/recipe');
var category = require('./routes/category');
var article = require('./routes/article');

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

router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(router);
app.listen(3001);
console.log('App started on port 3001')
module.exports = app;