var express = require('express');
var router = express.Router();

//console.log("hello world!");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
