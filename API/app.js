var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
require('./auth/auth')(passport)


var indexRouter = require('./routes/index');
var clientesRouter = require('./routes/clientes');
var menuRouter = require('./routes/menu');
var produtosRouter = require('./routes/produtos');
var orcamentoRouter = require('./routes/orcamento');
var usuarioRouter = require('./routes/usuarios');


authenticationMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET || '123',
  resave:false,
  saveUninitialized:false,
  cookie:{ maxAge: 50 * 60 * 1000 }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/clientes', authenticationMiddleware, clientesRouter);
app.use('/menu', authenticationMiddleware, menuRouter);
app.use('/produtos', authenticationMiddleware, produtosRouter);
app.use('/orcamento', authenticationMiddleware, orcamentoRouter);
app.use('/usuarios', authenticationMiddleware, usuarioRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log('error:'+ err)
});

module.exports = app;
