var apm = require('elastic-apm-node');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  setTimeout(function() {
    res.render('delayresponse', { title: 'Delay Response' });
  }, 1500);

  
});

module.exports = router;