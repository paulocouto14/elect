var express = require('express');
var router = express.Router();
var passport = require('passport')


router.get('/' ,(req, res, next) => {
  res.render('menu', { title:'Menu Principal' });
});



module.exports = router;
