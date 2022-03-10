var express = require('express');
var router = express.Router();
// const passport = require('passport')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('painel', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  res.render('painel', { title: 'Express' })
})


module.exports = router;
