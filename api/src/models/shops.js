const moongose = require('mongoose');
const Schema = moongose.Schema;


const shop = new Schema({
    nome: String,
    logo: String,
    categoria: String,
    destaque: Number,
    location: Object,
    recipient_id: String
})

module.exports = moongose.model('Shop', shop)