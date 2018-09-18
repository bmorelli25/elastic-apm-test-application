// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'test-service-name',

  // Use if APM Server requires a token
  // secretToken: '',

  // Set custom APM Server URL (default: http://localhost:8200)
  // serverUrl: ''
})

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var errorRouter = require('./routes/error');
var metadataRouter = require('./routes/metadata');
var addTagsRouter = require('./routes/addtags');
var delayResponseRouter = require('./routes/delayresponse');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/error', errorRouter);
app.use('/metadata', metadataRouter);
app.use('/addtags', addTagsRouter);
app.use('/delayresponse', delayResponseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
