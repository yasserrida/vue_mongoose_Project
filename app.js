var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
var indexRouter = require('./routes/index');
var apisRouter = require('./routes/api');

app.use('/', indexRouter);
app.use('/api', apisRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) { next(createError(404)); });
// error handler
app.use(function(err, req, res, next) { res.locals.message = err.message; res.locals.error = req.app.get('env') === 'development' ? err : {}; res.status(err.status || 500); res.render('error'); });

module.exports = app;
