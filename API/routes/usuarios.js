var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(process.env.SALT || 10) // variavel de ambient
const Usuario = require('../database/usuario')

router.get('/', (req, res, next) => {
  Usuario.findAll().then((todos) => {
    res.render('usuarios', {
      title:'Usuarios',
      todos:todos
      
    })
  }).catch((erro) => {res.send(erro)});
})

router.get('/add', (req, res, next) => {
  res.render('formularioUsuarios')
})


router.post('/add', (req, res, next) => {
  console.log(req.ip)
  
  let senhaParaSalvar = bcrypt.hashSync(req.body.senha, salt)

  Usuario.create({
    nome:req.body.nome,
    email:req.body.email,
    senha:senhaParaSalvar,
    telefone:req.body.telefone
  }).then(() => {
    console.log('Novo Usuario:'+ req.body.usuario)
    console.log('Email:'+ req.body.email)
    console.log('Senha:'+ senhaParaSalvar)
    console.log('Tel:'+ req.body.telefone)
    res.end('<script>window.close()</script>')
  }).catch((err) => {
    console.log('error: '+ err)
    res.redirect('/painel')
  })  
  
})


module.exports = router;
