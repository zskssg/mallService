
const express = require('express');
const path = require('path');
const Goods = require('./model/goods.js')
//创建服务器
const app = express();

//连接mongooseDB
require('./model/connect.js');
//require('./model/goods.js');
//开放静态资源文件
app.use(express.static(path.join(__dirname,'public')));

//配置请求路径
//拦截所有请求
app.use((req,res,next)=>{
  //1.允许哪些客户端访问我
  //*代表允许所有的客户端访问我。
  //如果请求需要涉及到cookie信息传递，不要用*，用具体的
  //res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Origin','http://localhost:8080');
  //允许客户端使用哪些方法请求方法访问我
  res.header('Access-Control-Allow-Methods','get,post');
  //设置允许传递cookie
  res.header('Access-Control-Allow-Credentials',true);
  next();
})
//const goods = require('./route/goods.js')
//查询所有商品信息
app.get('/goods',async (req,res)=>{
  console.log(req.path);
  const  data = await Goods.find()
  res.send(data);
})

//监听端口
app.listen(3000);
console.log('ok');