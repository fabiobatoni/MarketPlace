const moongose = require('mongoose');
const Schema = moongose.Schema;


const product = new Schema({
    shop_id: {
        type: Schema.Types.ObjectId,
        ref: 'Shop',
    },
    nome: String,
    capa: String,
    preco: Number,
    avaliacoes: Number,
})

module.exports = moongose.model('Product', product)