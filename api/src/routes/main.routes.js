const express = require('express');
const router = express.Router();

const Shops = require('../models/shops');
const Product = require('../models/product');

router.get('/', async (req, res) => {
    try{
        res.json({error: false, message: 'Hello'})
    } catch (err){
        res.json({error: true, message: err.message})
    }
})

router.get('/shops', async (req, res) => {
    try {
      const shops = await Shops.find();
      res.json({ error: false, shops });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });

  router.get('/shop/:id', async (req, res) => {
    try {
      const shop = await Shops.findById(req.params.id);
      let products = await Product.find({
        shop_id: shop._id,
      }).populate('shop_id', 'recipient_id');
  
      res.json({ error: false, shop: { ...shop._doc, products } });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });

module.exports =  router;