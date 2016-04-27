var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chuck Norris' });
});

router.get('/newRandom', function(req, res, next){
  request('http://api.icndb.com/jokes/random?callback=', function(error, response, body) {
   if (!error && response.statusCode == 200) {
     body();
     console.log(body)
     res.json(body);
   };
 });
});





module.exports = router;
