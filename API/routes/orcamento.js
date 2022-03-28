var express = require('express');
var router = express.Router();



router.get('/', (req, res, next) => {
  res.render('orcamento', { title:'orcamento' });
});


router.get("/gerar", (req, res) => {
      

})
module.exports = router;
