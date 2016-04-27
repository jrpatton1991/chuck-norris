var express = require('express');
var router = express.Router();
var request = require('request');
var passport = require ('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chuck Norris' });
});

router.get('/newRandom', function(req, res, next){
  request('http://api.icndb.com/jokes/random', function(error, response, body) {
   if (!error && response.statusCode == 200) {
     console.log(body)
     res.json(body);
   };
 });
});

router.get('/auth/twitter',
  passport.authenticate('twitter'));

router.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req + "   :   " + res)
    // Successful authentication, redirect home.
    res.redirect('/');
  });





module.exports = router;
