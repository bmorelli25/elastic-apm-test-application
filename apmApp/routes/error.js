var apm = require('elastic-apm-node');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let queryParm = req.query.id;

  // create a new error
  var err = new Error(queryParm || '/error Route hit');
  apm.captureError(err)

  res.render('customerror', { title: 'Custom Error Generator' });
});

module.exports = router;
