var apm = require('elastic-apm-node');
var express = require('express');
var router = express.Router();

// random number generator
function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

router.get('/', function(req, res, next) {

  // create a new error with random tag_number between 1-100
  var err = new Error('addTags');
  apm.addTags({
    tag_name: 'value',
    tag_number: getRandomNum(99)
  })
  apm.captureError(err)

  res.render('addtags', { title: 'Add Tags' });
});

module.exports = router;