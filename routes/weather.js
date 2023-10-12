var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let weatherData = [{
    Temp: '90.5',
    Unit: 'fahrenheit',
    Cloudy :'false',
    PrecipitationChance: '0'
}]
res.send(weatherData);
});

module.exports = router;
