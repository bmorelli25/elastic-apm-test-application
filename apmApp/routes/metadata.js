var apm = require('elastic-apm-node');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let id = '12345';
  let username = 'john_doe';
  let email = 'email@test.com';

  // create a new error
  var err = new Error('Sample Error with User Information');
  
  apm.captureError(err, {
    user: {
      id,
      username,
      email
    },
    custom: {
      some_important_metric: 'foobar'
    }
  })

  res.render('metadata', { title: 'Error with User Information' });
});

module.exports = router;