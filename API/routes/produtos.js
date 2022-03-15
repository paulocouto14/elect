var express = require('express');
var router = express.Router();
var Produtos = require('../database/produto')



/* GET users listing. */
router.get('/', (req, res, next) => {

  Produtos.findAll().then((todos) => {
    res.render('produtos', {
      title:'Produtos',
      
    })
  }).catch((erro) => {res.send(erro)});
  
});



router.post('/add', (req, res, next) => {
  
  Produtos.create({
    nome:req.body.nome,
    email:req.body.email,
    telefone:req.body.telefone,
    cep:req.body.cep,
    numero:req.body.numero
  }).then(() => {
    console.log('novo cliente cadastrado')
    res.redirect('/produtos')
  }).catch(() => {
    console.log('erro ao cadastra cliente:')
  });

})



router.get('/delete/:id', (req, res, next) => {   
  
  Cliente.destroy({ where:{ id:req.params.id }}).then(() => {
    res.redirect('/clientes')
  }).catch((err) => { console.log(err) });

})

module.exports = router;
