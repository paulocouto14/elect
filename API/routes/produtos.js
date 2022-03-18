var express = require('express');
var router = express.Router();
var Produtos = require('../database/produto')



/* GET users listing. */
router.get('/', (req, res, next) => {

  Produtos.findAll().then((todos) => {
    res.render('produtos', {
      title:'Produtos',
      todos:todos
      
    })
  }).catch((erro) => {res.send(erro)});
  
});

router.get('/add', (req, res, next) => {
  res.render('formularioProdutos')
})


router.post('/add', (req, res, next) => {
    
  Produtos.create({
    nome:req.body.nome,
    preco:req.body.preco,
    descricao:req.body.descricao,
    quantidade:req.body.quantidade
  }).then(() => {
    console.log('novo cliente cadastrado')
    res.end('<script>window.close()</script>')
  }).catch(() => {
    console.log('erro ao cadastra cliente:')
    res.redirect('menu')
  });

})

router.get('/editar/:id', (req, res, next) => {
  console.log(req.params.id)
  Produtos.findByPk(req.params.id).then((editar) => {
    res.render('editarProdutos', {itens:editar,title:'Alterar Item'})
  }).catch((err) => console.log(err))
  
})

router.post('/editar/:id', (req, res, next) => {
  console.log(req.body)
  // Produtos.update(req.params.id).then((e) => {
  //   e.nome = 'aaaaa',
  //   e.preco = '9999',
  //   e.descricao = 'kakakakaka',
  //   e.quantidade = '8888'
  //   e.save()
  //   console.log(`Produto ${e.id} alterado com sucesso!`)
  //   res.redirect('/produtos')
  // }).catch((err) => console.log(err))
})

// router.put('/editar/:id', (req, res, next) => {   
  
//   Cliente.destroy({ where: { id:req.params.id }}).then(() => {
//     res.redirect('/clientes')
//   }).catch((err) => { console.log(err) });

// })



module.exports = router;
