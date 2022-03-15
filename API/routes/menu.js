var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('menu', {title:'Menu Principal'});
});



module.exports = router;
