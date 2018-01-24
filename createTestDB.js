var mongoose = require('mongoose');
var Categories = require('./models/categories');
var Recipes = require('./models/recipes');

mongoose.connect('mongodb://localhost:27017/myCookeryTestDB', function (err) {
    if (err) throw err;
     
    console.log('Successfully connected');

    var db = mongoose.connection.db;
    db.dropDatabase(function(err) {
        if (err) throw err;
    });

    var bakeryProducts = new Categories({ 
        _id: new mongoose.Types.ObjectId(), 
        name: 'Выпечка' 
    });

    bakeryProducts.save(function(err) {
        if (err) throw err;
         
        var txt = "В миске смешать молоко и яйца. Добавить муку, 2 ст. ложки сахара и соль. Хорошо перемешать венчиком, добавить 2-3 ст." 
                    + " ложки растительного масла. Выпекать тонкие блинчики на сковороде с двух сторон. Сложить блины стопкой. Наши тонкие " 
                    + "блины на молоке готовы. Можно подавать к столу. Приятного аппетита!";

        var pancakes1 = new Recipes({ 
            _id: new mongoose.Types.ObjectId(), 
            name: 'Блины', 
            category: [bakeryProducts._id], 
            text: txt 
        });
        pancakes1.save(function(err) {
            if (err) throw err;
        });

        var pancakes2 = new Recipes({ 
            _id: new mongoose.Types.ObjectId(), 
            name: 'Блины 2', 
            category: [bakeryProducts._id], 
            text: txt 
        });
        pancakes2.save(function(err) {
            if (err) throw err;
        });

        var pancakes3 = new Recipes({ 
            _id: new mongoose.Types.ObjectId(), 
            name: 'Блины 3', 
            category: [bakeryProducts._id], 
            text: txt 
        });
        pancakes3.save(function(err) {
            if (err) throw err;
        });
    });

    var salads = new Categories({ 
        _id: new mongoose.Types.ObjectId(), 
        name: 'Салаты' 
    });
    salads.save(function(err) {
        if (err) throw err;
    });

    var soups = new Categories({ 
        _id: new mongoose.Types.ObjectId(), 
        name: 'Супы' 
    });
    soups.save(function(err) {
        if (err) throw err;
    });
    // mongoose.disconnect();
});