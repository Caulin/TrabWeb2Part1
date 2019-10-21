var Produto = require('../models/produto');
var mongoose = require('mongoose');

mongoose.connect('mongodb://Caulin:mongo123@ds137488.mlab.com:37488/mongo');

var produtos = [
    new Produto({
        imagePath: 'http://portal42.com.br/wp-content/uploads/2019/02/may-1860x1060_c.png',
        titulo: 'Devil May Cry 5',
        descricao: 'Jogo console',
        preco: 250
    }),
    new Produto({
        imagePath: 'http://portal42.com.br/wp-content/uploads/2019/02/may-1860x1060_c.png',
        titulo: 'Devil May Cry 5',
        descricao: 'Jogo console',
        preco: 250
    }),
    new Produto({
        imagePath: 'http://portal42.com.br/wp-content/uploads/2019/02/may-1860x1060_c.png',
        titulo: 'Devil May Cry 5',
        descricao: 'Jogo console',
        preco: 250
    }),
];

var quantidade = 0;
for (var i = 0; i < produtos.length; i++) {
    produtos[i].save((err, result) => {
        if (quantidade === produtos.length) desconectar;
    });
}
desconectar = () => {
    mongoose.disconnect();
}

