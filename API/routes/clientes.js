var express = require('express');
var router = express.Router();
var Cliente = require('../database/clientes')




router.get('/', (req, res, next) => {

  Cliente.findAll().then((todos) => {
    res.render('clientes', {
      title:'Clientes',
      todos:todos
      })
  }).catch((erro) => {res.send(erro)})  
  
});

router.get('/add', (req, res, next) => {
  res.render('formularioClientes')
})



router.post('/add', (req, res, next) => {  
  
  Cliente.create({
    nome:req.body.nome,
    email:req.body.email,
    telefone:req.body.telefone,
    cep:req.body.cep,
    numero:req.body.numero
  }).then(() => {
    console.log('novo cliente cadastrado')
    res.end('<script>window.close()</script>')
  }).catch(() => {
    console.log('erro ao cadastra cliente:')
  })

})



router.get('/delete/:id', (req, res, next) => { 
  console.log(req.params.id)  
  
  Cliente.destroy({ where:{ id:req.params.id }}).then(() => {
    res.redirect('/clientes')
  }).catch((err) => {console.log(err)})

})

module.exports = router;
