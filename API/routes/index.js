var express = require('express');
var router = express.Router();
var passport = require('passport')


router.get('/', (req, res, next) => {
  console.log(req.ip)
  res.render('index', { title: 'Login' });
});

router.post('/entrar', passport.authenticate('local', { failureRedirect: '/' }), (req, res, next) => {
  res.render('menu', { title:'Menu Principal' })
})

module.exports = router;
