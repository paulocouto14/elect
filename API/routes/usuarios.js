var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(process.env.SALT || 10) // variavel de ambient
const Usuario = require('../database/usuario')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('usuarios');
});

router.get('/admin', (req, res, next) => {
  res.render('addusuario');
});

router.post('/add', (req, res, next) => {
  let senhaParaSalvar = bcrypt.hashSync(req.body.senha, salt)
  Usuario.create({
    nome:req.body.usuario,
    email:req.body.email,
    senha:senhaParaSalvar,
    telefone:req.body.telefone
  }).then(() => {
    console.log('Novo Usuario:'+req.body.usuario)
    console.log('Email:'+req.body.email)
    console.log('Senha:'+senhaParaSalvar)
    console.log('Tel:'+req.body.telefone)
  }).catch((err) => console.log('error: '+ err))  
  res.redirect('/usuarios')
})

module.exports = router;
