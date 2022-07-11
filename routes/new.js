module.exports = function(app) {
  const car = require('../controllers/car.controller.js');
  app.post('/add', car.create);
}
