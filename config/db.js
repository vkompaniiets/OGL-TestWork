var Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;

Mongoose.set('debug', true);

var db = Mongoose.connect('mongodb://127.0.0.1:27017/myCookeryTestDB').then(() => console.log('connection with database succeeded'))
    .catch(err => console.error(err));

exports.db = db;