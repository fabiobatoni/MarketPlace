const Shop = require('../models/shops')
const Product = require('../models/product')

const shops = require('./market.json')
//database

require('../database')

const addShopAndProducts = async () => {
    try{
        for (let shop of shops) {
            const newShop = await new Shop(shop).save();
            await Product.insertMany(
                shop.produtos.map(p => ({ ...p, shop_id: newShop._id }))
            );
        }

        console.log('Final do Script');
    }catch(err){
        console.log(err.message);
    }
}

addShopAndProducts();
