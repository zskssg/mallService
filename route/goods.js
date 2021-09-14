
/* 
  商品路由
*/
const express = require('express')
const Goods = require('../model/goods.js')
const goods = express.Router();
//查询商品数据
goods.get('/',async (req,res)=>{
  console.log(req.path);
  const  data = await Goods.find()
  res.send(data);
})

module.exports = goods