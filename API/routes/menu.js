var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
  res.render('menu', { title:'Menu Principal' });
});



module.exports = router;
