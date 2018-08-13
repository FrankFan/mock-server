var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/msgList');
var capitalListRouter = require('./routes/capitalList');
var inviteListRouter = require('./routes/inviteList');
var shareContentRouter = require('./routes/shareContent')
var paymentOptionsRouter = require('./routes/paymentOptions')
var getPaymentRouter = require('./routes/getPaymentUrl')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 增加CORS跨域
app.all('*', function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', 'http://192.168.12.12:8080');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Request-With');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  // res.header("Content-Type", "application/json;charset=utf-8");
  res.header('X-Powered-By', 'Khan WS');
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/msgList', listRouter);
app.use('/capitalList', capitalListRouter);
app.use('/inviteList', inviteListRouter);
app.use('/shareContent', shareContentRouter);
app.use('/paymentOptions', paymentOptionsRouter);
app.use('/getPaymentUrl', getPaymentRouter);

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
