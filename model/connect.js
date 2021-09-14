/* 连接数据库 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://zsk:123456@localhost:27017/mall')
  .then(()=>{
    console.log('成功')
  })
  .catch((err)=>{
    console.log(err)
  })

