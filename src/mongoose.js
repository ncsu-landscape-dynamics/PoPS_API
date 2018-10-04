const mongoose = require('mongoose');

module.exports = function (app) {
  mongoose.connect(app.get('mongodb'), { useNewUrlParser: true, reconnectTries: 60, reconnectInterval: 1000 });
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
