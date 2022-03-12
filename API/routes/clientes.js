var express = require('express');
var router = express.Router();
var Cliente = require('../database/clientes')


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('clientes')
  
});

router.get('/add', (req, res, next) => {
  res.render('addcliente');
});

router.post('/add', (req, res, next) => {
  
  Cliente.create({
    nome:req.body.usuario,
    email:req.body.email,
    senha:senhaParaSalvar,
    telefone:req.body.telefone
  }).then(() => {
    console.log('Novo Usuario:'+req.body.usuario)
    console.log('Email:'+req.body.email)
    console.log('Senha:'+senhaParaSalvar)
    console.log('Tel:'+req.body.telefone)
    res.redirect('/usuarios')
  }).catch((err) => {
    console.log('error: '+ err)
    res.redirect('/painel')
  })  
  
})

router.get('/delete/:id', (req, res, next) => {   
  Usuario.destroy({where:{id:req.params.id}}).then(() => {
    res.redirect('/usuarios')
  }).catch((err) => {console.log(err)})
})

module.exports = router;
