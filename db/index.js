var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myCookeryTestDB', function (err) {
    if (err) throw err;
     
    console.log('Successfully connected');
});