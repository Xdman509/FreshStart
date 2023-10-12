var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather-info',function(req,res,next){
  res.render('weather');
});
module.exports = router;
