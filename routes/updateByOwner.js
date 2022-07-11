module.exports = function(app) {
  const car = require('../controllers/car.controller.js');
  app.put('/updatebyowner', car.updateByOwner);
}