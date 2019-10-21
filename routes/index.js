var express = require('express');
var router = express.Router();
var Produto = require('../models/produto');
/* GET home page. */
router.get('/', function (req, res, next) {
  Produto.find((err, data) => {
    var produtoParte = [];
    var parteTamanho = 3;
    for (var i = 0; i < data.length; i += parteTamanho) {
      produtoParte.push(data.slice(i, i + parteTamanho));
    }
    if (err) throw err;
    res.render('shop/index', { title: 'Shopping', produtos: produtoParte });
  });
});

module.exports = router;
