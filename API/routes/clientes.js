var express = require('express');
var router = express.Router();
var Cliente = require('../database/clientes')



/* GET users listing. */
router.get('/', (req, res, next) => {

  Cliente.findAll().then((todos) => {
    res.render('clientes', {
      title:'Clientes',
      todos:todos
      })
  }).catch((erro) => {res.send(erro)})  
  
});



router.post('/add', (req, res, next) => {
  
  Cliente.create({
    nome:req.body.nome,
    email:req.body.email,
    telefone:req.body.telefone,
    cep:req.body.cep,
    numero:req.body.numero
  }).then(() => {
    console.log('novo cliente cadastrado')
    res.redirect('/clientes')
  }).catch(() => {
    console.log('erro ao cadastra cliente:')
  })

})



router.get('/delete/:id', (req, res, next) => {   
  
  Cliente.destroy({ where:{ id:req.params.id }}).then(() => {
    res.redirect('/clientes')
  }).catch((err) => {console.log(err)})

})

module.exports = router;
