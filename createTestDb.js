var Article = require('./models/article').Article;
var Recipe = require('./models/recipe').Recipe;
var Category = require('./models/category').Category;
const async = require('async'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const uri = 'mongodb://127.0.0.1:27017/myCookeryTestDB';

mongoose.Promise = global.Promise;
mongoose.set('debug', true);


function log(data) {
  console.log(JSON.stringify(data, undefined, 2))
}

async.series(
  [
    (callback) => mongoose.connect(uri, callback),

    (callback) =>
      async.each(mongoose.models, (model, callback) =>
        model.remove({}, callback), callback),

    (callback) =>
      async.waterfall(
        ["Еда", "Выпечка", "Блины"].map(name =>
          (name == "Еда") ?
            (callback) => Category.create({ name: name, mainCategory: null }, callback) :
            (child, callback) =>
              Category.create({ name, mainCategory: child._id }, callback)
        ),
        callback
      ),

    (callback) => 
      Category.findOne({ name: "Блины" }, function (err, res) {
        Recipe.create({
          name: 'Блины с мясом',
          text: 'Just do it!',
          category: res._id
        });
        Recipe.create({
          name: 'Блины с творогом',
          text: 'Just do it!',
          category: res._id
        }, callback);
      }),

    (callback) =>
      async.waterfall(
        ["Новости IT", "Мобильные", "Приложения"].map(name =>
          (name == "Новости IT") ?
            (callback) => Category.create({ name: name, mainCategory: null }, callback) :
            (child, callback) =>
              Category.create({ name, mainCategory: child._id }, callback)
        ),
        callback
      ),

    (callback) =>
      Category.findOne({ name: "Приложения" }, function (err, res) {
        Article.create({
          name: 'New in Telegram',
          description: 'update',
          text: 'update',
          category: res._id
        });
        Article.create({
          name: 'Twitter news',
          category: res._id
        }, callback);
      }),
  ],
  (err) => {
    if (err) throw err;
    mongoose.disconnect();
  }
)