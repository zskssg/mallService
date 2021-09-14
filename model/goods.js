/* 
  商品集合
*/
const mongoose = require('mongoose')

const goodsSchema = new mongoose.Schema({
  title:String,
  pic_url:String,
  promotion_price:String,
  price:String,
  num_iid:String,
  detail_url:String,
  mogujie_cfav:Number

})

const Goods = mongoose.model('Goods',goodsSchema)
const data = [
  {
    "title": "小白鞋女2020新款夏季透气休闲女鞋运动网面百搭网红阿甘鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200709_7kkf0gf2jldhblhb12deeh58dd7cd_640x960.jpg",
    "promotion_price": "73.00",
    "price": "279.00",
    "num_iid": "1muqif6",
    "detail_url": "https://shop.mogu.com/detail/1muqif6?acm=3.ms.1_4_1muqif6.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_",
    "mogujie_cfav": 209
  },
  {
    "title": "街拍小白鞋女2020春季新款ins百搭老爹运动潮鞋夏鞋子板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200803_0kgdai589bb2gb2kbkje816adf7c1_750x1125.jpg",
    "promotion_price": "44.90",
    "price": "138.00",
    "num_iid": "1mrt9y2",
    "detail_url": "https://shop.mogu.com/detail/1mrt9y2?acm=3.ms.1_4_1mrt9y2.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_565901494_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2NTkwMTQ5NF80ZThmXzBfMF8wXzc3OF8xXzNfbG9jLTA=",
    "mogujie_cfav": 3028
  },
  {
    "title": "透气小白鞋女夏款女鞋韩版百搭板鞋港风布鞋夜光鞋子平底运动鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200317_13hce0h9564420agl5f3b8301ailj_640x860.jpg",
    "promotion_price": "79.90",
    "price": "114.15",
    "num_iid": "1mr6dom",
    "detail_url": "https://shop.mogu.com/detail/1mr6dom?acm=3.ms.1_4_1mr6dom.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_559910990_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU1OTkxMDk5MF80ZV8wXzBfMF81OTBfMV8zX2xvYy0w",
    "mogujie_cfav": 682
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动鞋男鞋休闲鞋春季男士透气老爹鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200804_886il78j4blkfd6bg820kg3fgchja_750x1125.jpg",
    "promotion_price": "95.00",
    "price": "142.84",
    "num_iid": "1mmgstg",
    "detail_url": "https://shop.mogu.com/detail/1mmgstg?acm=3.ms.1_4_1mmgstg.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_537483793_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUzNzQ4Mzc5M180ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 359
  },
  {
    "title": "小雏菊小白鞋女百搭夏季透气网面薄款鞋子女2020春季新款厚底",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200803_095f62fk6ke6d9796c2ij24kg3f06_750x1125.jpg",
    "promotion_price": "44.90",
    "price": "138.00",
    "num_iid": "1mswd2g",
    "detail_url": "https://shop.mogu.com/detail/1mswd2g?acm=3.ms.1_4_1mswd2g.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_573010591_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3MzAxMDU5MV80ZjhmXzBfMF8wXzc3OF8xXzNfbG9jLTA=",
    "mogujie_cfav": 714
  },
  {
    "title": "2020春夏季新款男士休闲运动板鞋小白鞋男韩版潮流百搭男鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200417_88g7le36133d528gi569la1h5gbif_640x750.jpg",
    "promotion_price": "79.80",
    "price": "114.00",
    "num_iid": "1ms9vog",
    "detail_url": "https://shop.mogu.com/detail/1ms9vog?acm=3.ms.1_4_1ms9vog.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_567807098_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2NzgwNzA5OF80ZjhmXzBfMF8wXzc1MV8xXzNfbG9jLTA=",
    "mogujie_cfav": 39
  },
  {
    "title": "老爹鞋女ins潮2020春季新款夏季女鞋透气百搭休闲运动鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200429_270c7j7ad091d8319cae4lek22e9b_640x960.jpg",
    "promotion_price": "68.00",
    "price": "288.00",
    "num_iid": "1msmnkk",
    "detail_url": "https://shop.mogu.com/detail/1msmnkk?acm=3.ms.1_4_1msmnkk.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_570805594_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3MDgwNTU5NF80ZjhmXzBfMF8wXzc5NV8xXzNfbG9jLTA=",
    "mogujie_cfav": 1053
  },
  {
    "title": "夏季新款男鞋子韩版男鞋潮流运动鞋男百搭休闲鞋男士透气老爹潮鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/191231_53h26j1lfcekdd7c5326h6j6belcd_640x960.jpg",
    "promotion_price": "89.98",
    "price": "128.55",
    "num_iid": "1mpkia2",
    "detail_url": "https://shop.mogu.com/detail/1mpkia2?acm=3.ms.1_4_1mpkia2.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_552398625_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU1MjM5ODYyNV80ZjhlXzBfMF8wXzY5NF8xXzNfbG9jLTA=",
    "mogujie_cfav": 173
  },
  {
    "title": "高帮帆布鞋子女2020夏季新款韩版经典复古学生百搭轻便小白鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190107_2k4590g559clf7198b95b0h536ha6_640x960.jpg",
    "promotion_price": "39.00",
    "price": "129.00",
    "num_iid": "1md9ct6",
    "detail_url": "https://shop.mogu.com/detail/1md9ct6?acm=3.ms.1_1_1md9ct6.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_476917391_486158240_2_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_1_486158240_55_0-dit_&cparam=MTU5NjU5MjU3MV8xajV4NGZzX2JmYjcxYWRiNTQxMWEyNGQzMTg2ZmY2ZDMxMTcwNTFlXzRfMV80NzY5MTczOTFfNDg4Yl8wXzJfMF81OTZfMV8wX3JzLTI4NDQ3LnJ0LTEud3QtMQ==",
    "mogujie_cfav": 11778
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动鞋男鞋休闲鞋男士透气网鞋小白鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190526_8f9250h4fc5iakjd0c1c898262cla_640x960.jpg",
    "promotion_price": "119.00",
    "price": "170.00",
    "num_iid": "1mhoaju",
    "detail_url": "https://shop.mogu.com/detail/1mhoaju?acm=3.ms.1_4_1mhoaju.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_505533863_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUwNTUzMzg2M180ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 770
  },
  {
    "title": "新款男鞋子夏季韩版潮流百搭运动休闲男鞋椰子网布男士学生小白鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190411_2a9g07lglj38gb7i356jd3c3a35c9_640x960.jpg",
    "promotion_price": "99.98",
    "price": "142.84",
    "num_iid": "1mfg8s8",
    "detail_url": "https://shop.mogu.com/detail/1mfg8s8?acm=3.ms.1_4_1mfg8s8.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_494551292_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzQ5NDU1MTI5Ml80ZjhlXzBfMF8wXzY5NF8xXzNfbG9jLTA=",
    "mogujie_cfav": 901
  },
  {
    "title": "网红超火老爹鞋女2020春季女鞋子新款运动鞋女百搭厚底跑步鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200305_0j5gde6i4fg2hhj1513k4b4eik37b_640x960.jpg",
    "promotion_price": "69.00",
    "price": "238.00",
    "num_iid": "1mqrjja",
    "detail_url": "https://shop.mogu.com/detail/1mqrjja?acm=3.ms.1_4_1mqrjja.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_557772133_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU1Nzc3MjEzM180ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 2419
  },
  {
    "title": "夏季新款板鞋男鞋子韩版潮流百搭运动男鞋休闲鞋男士小白鞋老爹鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/191029_813d9f8i2j07g6680aligl1044i9g_640x960.jpg",
    "promotion_price": "99.98",
    "price": "142.84",
    "num_iid": "1mmxfhq",
    "detail_url": "https://shop.mogu.com/detail/1mmxfhq?acm=3.ms.1_4_1mmxfhq.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_539672450_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUzOTY3MjQ1MF80ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 665
  },
  {
    "title": "橘色老爹鞋女2020新款女鞋子夏季网面透气运动鞋女百搭休闲鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200619_107720l50f7f47696ib5lkbal1d17_640x960.jpg",
    "promotion_price": "68.00",
    "price": "188.00",
    "num_iid": "1mua4pg",
    "detail_url": "https://shop.mogu.com/detail/1mua4pg?acm=3.ms.1_1_1mua4pg.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_579400384_550640046_3_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_1_550640046_58_0-dit_&cparam=MTU5NjU5MjU3MV8xajVzeTIyX2ZhYzE5MGI3ZGVmZTA5ODIxNTI1MTk4ZTJlOGVkMDRhXzRfMl81Nzk0MDAzODRfNDg4YV8wXzNfMF81ODlfMV8wX3JzLTI4NDQ3LnJ0LTEud3QtMA==",
    "mogujie_cfav": 159
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动鞋男鞋社会春季透气休闲鞋男士跑步鞋椰子鞋男生学院风飞织潮鞋男",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190323_19h3j4800ijj7k1dih1cd3780hl31_640x960.jpg",
    "promotion_price": "89.98",
    "price": "128.55",
    "num_iid": "1meuops",
    "detail_url": "https://shop.mogu.com/detail/1meuops?acm=3.ms.1_4_1meuops.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_488924885_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzQ4ODkyNDg4NV80ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 86
  },
  {
    "title": "ins街拍小白鞋女2020新款女鞋子春季休闲鞋女学生平底板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200416_0813054bde6gjh6ef4467a3040iik_640x960.jpg",
    "promotion_price": "78.00",
    "price": "288.00",
    "num_iid": "1ms986w",
    "detail_url": "https://shop.mogu.com/detail/1ms986w?acm=3.ms.1_4_1ms986w.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_569127893_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2OTEyNzg5M180ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 554
  },
  {
    "title": "网红小白鞋女2020春季新款鞋子女百搭厚底运动学生休闲板鞋女",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200320_4976d73hbhc74k57i5462k76g9f71_640x960.jpg",
    "promotion_price": "69.00",
    "price": "298.00",
    "num_iid": "1mr9yvm",
    "detail_url": "https://shop.mogu.com/detail/1mr9yvm?acm=3.ms.1_4_1mr9yvm.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_562040306_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MjA0MDMwNl80ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 704
  },
  {
    "title": "鞋子女新款2020夏季网红透气小白鞋女鞋薄款平底浅口休闲板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200707_2d2l213cj06406kfafckj1iai9992_640x960.jpg",
    "promotion_price": "68.00",
    "price": "279.00",
    "num_iid": "1muobt4",
    "detail_url": "https://shop.mogu.com/detail/1muobt4?acm=3.ms.1_4_1muobt4.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_584083636_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU4NDA4MzYzNl80ZjhmXzBfMF8wXzQzOF8xXzNfbG9jLTA=",
    "mogujie_cfav": 35
  },
  {
    "title": "超火老爹鞋女2020春季女鞋新款百搭小白休闲厚底增高运动鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200310_3cga9ed74khd8eaci7e3bckj6hjid_640x960.jpg",
    "promotion_price": "59.00",
    "price": "228.00",
    "num_iid": "1mqwj8w",
    "detail_url": "https://shop.mogu.com/detail/1mqwj8w?acm=3.ms.1_4_1mqwj8w.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_561159741_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MTE1OTc0MV80ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 920
  },
  {
    "title": "内增高女鞋小白鞋女2020新款春季厚底网红鞋子百搭休闲鞋板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200314_1eajgcghhlg8a010i416b9495ii00_640x960.jpg",
    "promotion_price": "86.00",
    "price": "199.00",
    "num_iid": "1mr1gba",
    "detail_url": "https://shop.mogu.com/detail/1mr1gba?acm=3.ms.1_4_1mr1gba.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_563182894_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MzE4Mjg5NF80ZjhlXzBfMF8wXzc2Nl8xXzNfbG9jLTA=",
    "mogujie_cfav": 217
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动鞋男鞋休闲男士网布鞋透气小白鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190624_185c392k6i3e0399hg6cbg0gie9e9_640x960.jpg",
    "promotion_price": "99.98",
    "price": "142.84",
    "num_iid": "1mimerq",
    "detail_url": "https://shop.mogu.com/detail/1mimerq?acm=3.ms.1_4_1mimerq.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_510433043_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUxMDQzMzA0M180ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 390
  },
  {
    "title": "春季新款尖头晚晚鞋浅口平底时尚百搭淑女鞋软底单鞋学生简约女鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190208_43hkhhch5il79ja927ja46d2h35ai_640x960.jpg",
    "promotion_price": "79.30",
    "price": "103.00",
    "num_iid": "1mdo8rw",
    "detail_url": "https://shop.mogu.com/detail/1mdo8rw?acm=3.ms.1_1_1mdo8rw.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_486971924_487708889_5_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_1_487708889_41_0-dit_&cparam=MTU5NjU5MjU3MV8xajk4djYyXzM0MTcxNzBlYjAxOTliM2MyZDA1N2Q1ZTc1ZWYyNmE4XzRfNF80ODY5NzE5MjRfNDk4ZV8wXzVfMF84OTBfMV8wX3JzLTI4NDQ3LnJ0LTEud3QtMQ==",
    "mogujie_cfav": 5435
  },
  {
    "title": "夏季薄款透气网面小白鞋女鞋2020年新款春夏百搭小雏菊网鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200618_0abc470bch27lg4f60c16cf8df7fh_640x960.jpg",
    "promotion_price": "49.90",
    "price": "138.00",
    "num_iid": "1mu9jf8",
    "detail_url": "https://shop.mogu.com/detail/1mu9jf8?acm=3.ms.1_4_1mu9jf8.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_581546979_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU4MTU0Njk3OV80ZjhmXzBfMF8wXzc3OF8xXzNfbG9jLTA=",
    "mogujie_cfav": 76
  },
  {
    "title": "2020春夏季新款男士休闲运动小白鞋男韩版潮流百搭老爹鞋子男",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200308_206ekj18gdd6gd42kg9dij1el49bf_640x750.jpg",
    "promotion_price": "67.99",
    "price": "97.14",
    "num_iid": "1mqvbd0",
    "detail_url": "https://shop.mogu.com/detail/1mqvbd0?acm=3.ms.1_4_1mqvbd0.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_557633647_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU1NzYzMzY0N180ZjhmXzBfMF8wXzc1MV8xXzNfbG9jLTA=",
    "mogujie_cfav": 32
  },
  {
    "title": "男鞋夏季透气布面低帮板鞋子男韩版百搭休闲男小白鞋潮流运动鞋男",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200330_038ieef3kj42b2e87k60ack003ef1_640x960.jpg",
    "promotion_price": "89.60",
    "price": "128.00",
    "num_iid": "1mrmppw",
    "detail_url": "https://shop.mogu.com/detail/1mrmppw?acm=3.ms.1_4_1mrmppw.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_563343327_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MzM0MzMyN180ZjhmXzBfMF8wXzczNl8xXzNfbG9jLTA=",
    "mogujie_cfav": 40
  },
  {
    "title": "2020夏季时尚棉鞋男鞋休闲鞋男士韩版皮鞋男鞋子潮流百搭板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/180322_4ff4ijiaeghegde328e39831ai7e5_640x960.jpg",
    "promotion_price": "89.98",
    "price": "128.55",
    "num_iid": "1lu7y4c",
    "detail_url": "https://shop.mogu.com/detail/1lu7y4c?acm=3.ms.1_4_1lu7y4c.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_577339988_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3NzMzOTk4OF80ZjhlXzBfMF8wXzY5NF8xXzNfbG9jLTA=",
    "mogujie_cfav": 1642
  },
  {
    "title": "小雏菊小白鞋女鞋子2020年秋季新款网红百搭厚底松糕休闲板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200703_0fbegahff6hi06fh1cjg1ij7ce452_640x960.jpg",
    "promotion_price": "68.00",
    "price": "279.00",
    "num_iid": "1mulsnw",
    "detail_url": "https://shop.mogu.com/detail/1mulsnw?acm=3.ms.1_1_1mulsnw.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_582193737_1543930894_6_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_2_1543930894_75_0-dit_&cparam=MTU5NjU5MjU3MV8xaXhqa3BnXzNkYjJlZjhjNmIyNWMyMjM0ZjA4MGRhMTA2ZDdkODA5XzRfNV81ODIxOTM3MzdfNGE4ZF8wXzZfMF80MzhfMV8wX3JzLTI4NDQ3LnJ0LTEud3QtMQ==",
    "mogujie_cfav": 60
  },
  {
    "title": "2020夏季新款男鞋子韩版潮流百搭运动鞋男鞋休闲透气小白鞋男",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200522_2ljhl96c81f8k215gbc86c8811j69_640x960.jpg",
    "promotion_price": "89.98",
    "price": "128.55",
    "num_iid": "1mthdsc",
    "detail_url": "https://shop.mogu.com/detail/1mthdsc?acm=3.ms.1_4_1mthdsc.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_575129175_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3NTEyOTE3NV80ZjhlXzBfMF8wXzY5NF8xXzNfbG9jLTA=",
    "mogujie_cfav": 13
  },
  {
    "title": "韩版网纱透气小雏菊鞋子女百搭平底系带学生休闲厚底夏季新款板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200628_85elf1jlb81776llbig75l8gjejkl_640x960.jpg",
    "promotion_price": "69.00",
    "price": "138.00",
    "num_iid": "1mtpjcs",
    "detail_url": "https://shop.mogu.com/detail/1mtpjcs?acm=3.ms.1_4_1mtpjcs.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_577451278_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3NzQ1MTI3OF80ZjhmXzBfMF8wXzQ5XzFfM19sb2MtMA==",
    "mogujie_cfav": 37
  },
  {
    "title": "厚底小白鞋女ins女鞋子2020新款网面运动休闲鞋女百搭板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200325_0694glgi0h3dl9616leed608ec19l_640x960.jpg",
    "promotion_price": "69.00",
    "price": "238.00",
    "num_iid": "1mrger4",
    "detail_url": "https://shop.mogu.com/detail/1mrger4?acm=3.ms.1_4_1mrger4.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_563112872_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MzExMjg3Ml80ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 1030
  },
  {
    "title": "网红内增高小白鞋女2020春季新款百搭休闲厚底运动鞋老爹鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200804_0ahb90jakg7lc5h316ac3cck73587_750x1125.jpg",
    "promotion_price": "85.00",
    "price": "288.00",
    "num_iid": "1mrsoim",
    "detail_url": "https://shop.mogu.com/detail/1mrsoim?acm=3.ms.1_4_1mrsoim.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_572848003_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3Mjg0ODAwM180ZjhmXzBfMF8wXzU3M18xXzNfbG9jLTA=",
    "mogujie_cfav": 559
  },
  {
    "title": "网面透气小雏菊网布鞋女镂空小白女鞋子2020夏季百搭板鞋布鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200416_60096l64clcc90cjfc77bfk5i6fd7_640x959.jpg",
    "promotion_price": "49.90",
    "price": "138.00",
    "num_iid": "1ms8kmu",
    "detail_url": "https://shop.mogu.com/detail/1ms8kmu?acm=3.ms.1_4_1ms8kmu.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_569344584_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2OTM0NDU4NF80ZjhmXzBfMF8wXzc3OF8xXzNfbG9jLTA=",
    "mogujie_cfav": 47
  },
  {
    "title": "网红超火老爹鞋女2020夏季女鞋子新款运动鞋女百搭厚底跑步鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200718_2le2ke13i44ga92hd4aefb8k1l52f_640x960.jpg",
    "promotion_price": "69.00",
    "price": "168.00",
    "num_iid": "1muwzq6",
    "detail_url": "https://shop.mogu.com/detail/1muwzq6?acm=3.ms.1_4_1muwzq6.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_",
    "mogujie_cfav": 16
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动板鞋男鞋休闲透气男士帆布小白鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200529_3i1ck862g5egfkb3ec79a3lh88kl4_640x960.jpg",
    "promotion_price": "169.00",
    "price": "241.43",
    "num_iid": "1mto80i",
    "detail_url": "https://shop.mogu.com/detail/1mto80i?acm=3.ms.1_4_1mto80i.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_576383261_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3NjM4MzI2MV80ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 20
  },
  {
    "title": "高帮小白鞋子女2020年秋季新款网红平底百搭韩版运动休闲板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200803_02ge2ia8a1lkl5ch1ikgb6cfbk8kc_750x1125.jpg",
    "promotion_price": "63.00",
    "price": "279.00",
    "num_iid": "1mv3448",
    "detail_url": "https://shop.mogu.com/detail/1mv3448?acm=3.ms.1_1_1mv3448.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_583808975_553657504_8_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_1_553657504_78_0-dit_&cparam=MTU5NjU5MjU3MV8xY2hzZXcyX2M1ODNhYWE2NWI1NWZmNWUxMzgyMTY5ZjAwZjUzMGM5XzRfN181ODM4MDg5NzVfNGE4OV8wXzhfMF80MzhfMV8wX3JzLTI4NDQ3LnJ0LTEud3QtMQ==",
    "mogujie_cfav": 57
  },
  {
    "title": "时尚百搭小白鞋女原宿韩版ulzzang板鞋子超火皮面休闲鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200724_1fc1500b2ce52hb53ki4ldkf85g9f_640x960.jpg",
    "promotion_price": "79.90",
    "price": "114.15",
    "num_iid": "1mv3ps2",
    "detail_url": "https://shop.mogu.com/detail/1mv3ps2?acm=3.ms.1_4_1mv3ps2.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_583855200_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU4Mzg1NTIwMF80Y18wXzBfMF81OTBfMV8zX2xvYy0w",
    "mogujie_cfav": 24
  },
  {
    "title": "小皮鞋女鞋子2020新款春季新款乐福鞋休闲百搭黑色平底单鞋女",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200306_7gih77258c110ii4hcbc5159eghek_640x960.jpg",
    "promotion_price": "79.00",
    "price": "288.00",
    "num_iid": "1mqt6do",
    "detail_url": "https://shop.mogu.com/detail/1mqt6do?acm=3.ms.1_4_1mqt6do.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_562362073_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MjM2MjA3M180ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 299
  },
  {
    "title": "老爹鞋女夏季2020年新款厚底内增高女鞋子百搭休闲运动小白鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200803_7e9139c3fh62kjca489a6gd057k4h_750x1125.jpg",
    "promotion_price": "68.00",
    "price": "279.00",
    "num_iid": "1mux21c",
    "detail_url": "https://shop.mogu.com/detail/1mux21c?acm=3.ms.1_4_1mux21c.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_",
    "mogujie_cfav": 77
  },
  {
    "title": "2020春夏季新款男士休闲运动板鞋男鞋韩版潮流百搭阿甘鞋子男",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200309_509g584348j6ia67bchlk3e2ag0i3_640x780.jpg",
    "promotion_price": "79.80",
    "price": "114.00",
    "num_iid": "1mqwbsa",
    "detail_url": "https://shop.mogu.com/detail/1mqwbsa?acm=3.ms.1_4_1mqwbsa.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_557841228_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU1Nzg0MTIyOF80ZjhmXzBfMF8wXzc1MV8xXzNfbG9jLTA=",
    "mogujie_cfav": 21
  },
  {
    "title": "2020新款韩版时尚细跟高跟鞋性感夜店拼色单鞋女鞋子新娘婚鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/180409_2g58aa4120379gilfe62lab1h932d_640x960.jpg",
    "promotion_price": "108.00",
    "price": "154.29",
    "num_iid": "1lrtnv2",
    "detail_url": "https://shop.mogu.com/detail/1lrtnv2?acm=3.ms.1_1_1lrtnv2.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_377736597_415237303_9_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_1_415237303_50_0-dit_&cparam=MTU5NjU5MjU3MV8xaWpicWd3XzczMjJhMTkxZmI2OTc0MzBkYzNlMjdhMDBmYjMxNmM3XzRfOF8zNzc3MzY1OTdfNDk4Nl8wXzlfMF8zM18xXzBfcnMtMjg0NDcucnQtMS53dC0x",
    "mogujie_cfav": 968
  },
  {
    "title": "厚底运动鞋女2020新款夏季女鞋子小白鞋网面透气休闲老爹鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200507_5774d2ilej612c55b716fb8dgbfil_640x960.jpg",
    "promotion_price": "59.00",
    "price": "168.00",
    "num_iid": "1msu35m",
    "detail_url": "https://shop.mogu.com/detail/1msu35m?acm=3.ms.1_4_1msu35m.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_573624284_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3MzYyNDI4NF80ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 181
  },
  {
    "title": "夏季新款男鞋子潮流休闲鞋男士百搭韩版老爹鞋运动鞋厚底增高男鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200731_6271kfk1f3da087g2b2e631l4j6cb_750x1125.jpg",
    "promotion_price": "95.00",
    "price": "142.84",
    "num_iid": "1mpafy2",
    "detail_url": "https://shop.mogu.com/detail/1mpafy2?acm=3.ms.1_4_1mpafy2.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_551139213_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU1MTEzOTIxM180ZjhlXzBfMF8wXzY5NF8xXzNfbG9jLTA=",
    "mogujie_cfav": 86
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动鞋男鞋休闲鞋男士透气高帮老爹鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/191010_66j83455791hg418ie3i43li175f0_640x960.jpg",
    "promotion_price": "119.00",
    "price": "170.00",
    "num_iid": "1mlr1uo",
    "detail_url": "https://shop.mogu.com/detail/1mlr1uo?acm=3.ms.1_4_1mlr1uo.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_533864016_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUzMzg2NDAxNl80ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 158
  },
  {
    "title": "一脚蹬小白鞋女2020春季新款韩版百搭平底休闲板鞋两穿女鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200329_2aiibaa0dkfkegk4kl6ibdf9hcbdi_640x960.jpg",
    "promotion_price": "78.00",
    "price": "288.00",
    "num_iid": "1mr6euk",
    "detail_url": "https://shop.mogu.com/detail/1mr6euk?acm=3.ms.1_4_1mr6euk.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_565334126_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2NTMzNDEyNl80ZjhmXzBfMF8wXzcyMV8xXzNfbG9jLTA=",
    "mogujie_cfav": 669
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动鞋男鞋休闲透气帆布板鞋老爹潮鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200506_1809802kd74903649504k29ji7e98_640x960.jpg",
    "promotion_price": "79.80",
    "price": "114.00",
    "num_iid": "1mss4bu",
    "detail_url": "https://shop.mogu.com/detail/1mss4bu?acm=3.ms.1_4_1mss4bu.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_572038634_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3MjAzODYzNF80ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 41
  },
  {
    "title": "网红老爹鞋女鞋子2020春季新款街拍休闲运动鞋女厚底智薰鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200305_6c2kf1cdig783a5egh9k0506g1akh_640x960.jpg",
    "promotion_price": "69.00",
    "price": "286.00",
    "num_iid": "1mqslp8",
    "detail_url": "https://shop.mogu.com/detail/1mqslp8?acm=3.ms.1_4_1mqslp8.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_561159747_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MTE1OTc0N180ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 389
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动鞋男鞋休闲网鞋透气小白鞋老爹鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/191008_58fc01d4d8f14cgi584gb7e084043_640x960.jpg",
    "promotion_price": "99.75",
    "price": "142.50",
    "num_iid": "1mlog56",
    "detail_url": "https://shop.mogu.com/detail/1mlog56?acm=3.ms.1_4_1mlog56.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_533307303_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUzMzMwNzMwM180ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 1030
  },
  {
    "title": "夏季新款男鞋子韩版潮流男鞋休闲鞋百搭男士运动鞋学生板鞋帆布鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200113_4fgak1e8ka0ab312fh4dl54kgbaja_640x960.jpg",
    "promotion_price": "89.98",
    "price": "128.55",
    "num_iid": "1mpzeei",
    "detail_url": "https://shop.mogu.com/detail/1mpzeei?acm=3.ms.1_4_1mpzeei.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_554241452_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU1NDI0MTQ1Ml80ZjhlXzBfMF8wXzY5NF8xXzNfbG9jLTA=",
    "mogujie_cfav": 50
  },
  {
    "title": "夏季新款男鞋子韩版潮流百搭运动男鞋休闲透气男士帆布板鞋小白鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200525_0625d9hhh48hjh0d8fl411337hfe3_640x960.jpg",
    "promotion_price": "89.98",
    "price": "128.55",
    "num_iid": "1mtkcxi",
    "detail_url": "https://shop.mogu.com/detail/1mtkcxi?acm=3.ms.1_4_1mtkcxi.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_575600459_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3NTYwMDQ1OV80ZjhlXzBfMF8wXzI4N18xXzNfbG9jLTA=",
    "mogujie_cfav": 24
  },
  {
    "title": "运动小白鞋女2020夏季新款网红百搭网面包头薄款透气跑步鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200531_26di9ij6b8cfbi403k7eihk6j50c6_640x960.jpg",
    "promotion_price": "79.00",
    "price": "286.00",
    "num_iid": "1mtqd5y",
    "detail_url": "https://shop.mogu.com/detail/1mtqd5y?acm=3.ms.1_4_1mtqd5y.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_576956155_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3Njk1NjE1NV80ZjhmXzBfMF8wXzc5NV8xXzNfbG9jLTA=",
    "mogujie_cfav": 27
  },
  {
    "title": "飞织运动鞋女2020夏季新款网面透气椰子鞋女情侣休闲跑步鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200710_5a6jal164he22e0igg9f545d44jl2_640x960.jpg",
    "promotion_price": "89.00",
    "price": "228.00",
    "num_iid": "1muquog",
    "detail_url": "https://shop.mogu.com/detail/1muquog?acm=3.ms.1_4_1muquog.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_582580141_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU4MjU4MDE0MV80ZjhmXzBfMF8wXzU4OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 8
  },
  {
    "title": "鞋子女2020春夏新款方头浅口软皮韩范粗跟单鞋女低跟时尚瓢鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200530_897f03iajl818b55d4ca9kklb9447_640x960.jpg",
    "promotion_price": "59.00",
    "price": "85.00",
    "num_iid": "1mtoria",
    "detail_url": "https://shop.mogu.com/detail/1mtoria?acm=3.ms.1_4_1mtoria.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_576618089_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3NjYxODA4OV80ZjhkXzBfMF8wXzY1XzFfM19sb2MtMA==",
    "mogujie_cfav": 72
  },
  {
    "title": "厚底魔术贴小白鞋女2020新款秋季百搭女鞋子网红两穿休闲板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200803_4je6l9ijk6cdd4ihkjbhh3h6kjjg1_750x1125.jpg",
    "promotion_price": "59.00",
    "price": "279.00",
    "num_iid": "1mutr5y",
    "detail_url": "https://shop.mogu.com/detail/1mutr5y?acm=3.ms.1_1_1mutr5y.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_582504612_552803619_12_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_1_552803619_68_0-dit_&cparam=MTU5NjU5MjU3MV8xZzllMHQ2X2Q2ZmM1ZTc3MGJhZWI3NmRlMmIxZDQxYjcwMTExM2U2XzRfMTFfNTgyNTA0NjEyXzRiODhfMF8xMl8wXzQzOF8xXzBfcnMtMjg0NDcucnQtMS53dC0x",
    "mogujie_cfav": 108
  },
  {
    "title": "2020春夏季新款情侣休闲鞋运动老爹鞋男鞋韩版潮流百搭鞋子男",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200419_8h5i1g2ci4482ciec41d3i0chk1l9_640x780.jpg",
    "promotion_price": "99.40",
    "price": "142.00",
    "num_iid": "1msbwpi",
    "detail_url": "https://shop.mogu.com/detail/1msbwpi?acm=3.ms.1_4_1msbwpi.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_568212274_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2ODIxMjI3NF80ZjhmXzBfMF8wXzc1MV8xXzNfbG9jLTA=",
    "mogujie_cfav": 26
  },
  {
    "title": "女鞋单鞋女新款百搭英伦风小皮鞋女粗跟高跟鞋子女韩版春装平底鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200803_5d5hi5d8kb177dkjg13ijci74kh79_750x1125.jpg",
    "promotion_price": "59.00",
    "price": "97.15",
    "num_iid": "1md8cw2",
    "detail_url": "https://shop.mogu.com/detail/1md8cw2?acm=3.ms.1_4_1md8cw2.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_476946228_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzQ3Njk0NjIyOF80ZjhmXzBfMF8wXzc0NV8xXzNfbG9jLTA=",
    "mogujie_cfav": 4622
  },
  {
    "title": "玛丽珍粗跟单鞋女百搭新款2020包头凉鞋子女春夏季韩版奶奶鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190307_6eh2gife48773208569cf6h72bf9a_640x960.jpg",
    "promotion_price": "89.00",
    "price": "128.00",
    "num_iid": "1me03sk",
    "detail_url": "https://shop.mogu.com/detail/1me03sk?acm=3.ms.1_4_1me03sk.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_510793581_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUxMDc5MzU4MV80ZjhmXzBfMF8wXzc3OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 5082
  },
  {
    "title": "2019年新款鞋子女内增高小白鞋女学院风运动鞋韩版百搭休闲鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/180228_068b1c05gg1l824b746l0l6he19c8_640x960.jpg",
    "promotion_price": "98.00",
    "price": "140.00",
    "num_iid": "1lrwamu",
    "detail_url": "https://shop.mogu.com/detail/1lrwamu?acm=3.ms.1_4_1lrwamu.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_495525233_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzQ5NTUyNTIzM180ZjhmXzBfMF8wXzc3OV8xXzNfbG9jLTA=",
    "mogujie_cfav": 1924
  },
  {
    "title": "DDOO网红小白鞋女新款春季女鞋百搭学生板鞋韩版白鞋贝壳鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190311_3l0ef528bahhjd8e202e3b3bck043_640x960.jpg",
    "promotion_price": "55.30",
    "price": "79.00",
    "num_iid": "1mehcdg",
    "detail_url": "https://shop.mogu.com/detail/1mehcdg?acm=3.ms.1_1_1mehcdg.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_491614769_491854072_13_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_1_491854072_42_0-dit_&cparam=MTU5NjU5MjU3MV8xaXJsMHQ0XzMwYjkzNDc1MDRjYWVkOGQwNWUwNWE2NjEyODZlMDhjXzRfMTJfNDkxNjE0NzY5XzQ5OGVfMF8xM18wXzE5XzFfMF9ycy0yODQ0Ny5ydC0xLnd0LTE=",
    "mogujie_cfav": 3540
  },
  {
    "title": "小白鞋女2020新款夏季薄款透气女鞋网面百搭潮鞋网红运动鞋子",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200716_096abklljkgg23fa55a81k51b51f7_640x960.jpg",
    "promotion_price": "68.00",
    "price": "288.00",
    "num_iid": "1musy64",
    "detail_url": "https://shop.mogu.com/detail/1musy64?acm=3.ms.1_4_1musy64.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_",
    "mogujie_cfav": 92
  },
  {
    "title": "网红老爹鞋女鞋子女新款春秋厚底休闲运动鞋女韩版百搭学生小白鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200801_8bk7h63d2j8ce5h50b0afjg2b03h5_900x1200.jpg",
    "promotion_price": "69.00",
    "price": "169.00",
    "num_iid": "1mq3jhi",
    "detail_url": "https://shop.mogu.com/detail/1mq3jhi?acm=3.ms.1_4_1mq3jhi.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_554444863_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU1NDQ0NDg2M180ZjhmXzBfMF8wXzc0NV8xXzNfbG9jLTA=",
    "mogujie_cfav": 1819
  },
  {
    "title": "小白鞋新款女百搭春装休闲鞋女板鞋女韩版厚底内增高运动鞋子女鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/190707_0hcfhabc5j7jc1f344c0c585i22c1_900x1200.jpg",
    "promotion_price": "69.00",
    "price": "169.00",
    "num_iid": "1mj2hwk",
    "detail_url": "https://shop.mogu.com/detail/1mj2hwk?acm=3.ms.1_4_1mj2hwk.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_512825756_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUxMjgyNTc1Nl80ZjhmXzBfMF8wXzc0NV8xXzNfbG9jLTA=",
    "mogujie_cfav": 1996
  },
  {
    "title": "马丁靴女秋冬季加绒新款英伦风女靴子女短靴女百搭粗跟鞋子女鞋潮",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/191021_33j5hck27c32ej6ahi61ad9e1bgdg_900x1200.jpg",
    "promotion_price": "79.00",
    "price": "179.00",
    "num_iid": "1mlh62s",
    "detail_url": "https://shop.mogu.com/detail/1mlh62s?acm=3.ms.1_4_1mlh62s.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_531189337_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzUzMTE4OTMzN180ZjhmXzBfMF8wXzY1M18xXzNfbG9jLTA=",
    "mogujie_cfav": 2027
  },
  {
    "title": "小雏菊厚底小白鞋女2020春夏新款休闲鞋女百搭透气增高鞋子女",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200414_5g77a820164a55hi771k23dji87j9_640x960.jpg",
    "promotion_price": "75.00",
    "price": "268.00",
    "num_iid": "1ms56nq",
    "detail_url": "https://shop.mogu.com/detail/1ms56nq?acm=3.ms.1_1_1ms56nq.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_567360784_542867457_14_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_1_542867457_68_0-dit_&cparam=MTU5NjU5MjU3MV8xamI1dzVvX2M3MTY5NDc4MzNlOTdmMDc2M2E4ZDUxNDc5M2Y1ZDcwXzRfMTNfNTY3MzYwNzg0XzRiODdfMF8xNF8wXzU4OV8xXzBfcnMtMjg0NDcucnQtMS53dC0w",
    "mogujie_cfav": 335
  },
  {
    "title": "老爹鞋子女夏季2020新款网红百搭增高透气厚底休闲小白运动鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200714_5e24dheka806ikjid7b22f52ckebb_640x960.jpg",
    "promotion_price": "68.00",
    "price": "279.00",
    "num_iid": "1musyei",
    "detail_url": "https://shop.mogu.com/detail/1musyei?acm=3.ms.1_4_1musyei.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_",
    "mogujie_cfav": 104
  },
  {
    "title": "2020春夏季新款情侣休闲运动板鞋小白鞋男韩版潮流百搭鞋子男",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200516_782i45g591e4iaki2h6f0d6ee485j_640x750.jpg",
    "promotion_price": "79.80",
    "price": "114.00",
    "num_iid": "1mt64kk",
    "detail_url": "https://shop.mogu.com/detail/1mt64kk?acm=3.ms.1_4_1mt64kk.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_574038186_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3NDAzODE4Nl80ZjhmXzBfMF8wXzc1MV8xXzNfbG9jLTA=",
    "mogujie_cfav": 7
  },
  {
    "title": "鞋子女夏季皮鞋女高跟鞋粗跟单鞋女新款百搭春季女鞋春秋中跟尖头",
    "pic_url": "https://s5.mogucdn.com/mlcdn/776a41/200804_5244d6ceb82f321gc2j078dfklk35_750x1125.jpg",
    "promotion_price": "69.00",
    "price": "169.00",
    "num_iid": "1mr8fyq",
    "detail_url": "https://shop.mogu.com/detail/1mr8fyq?acm=3.ms.1_4_1mr8fyq.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_560117424_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MDExNzQyNF80ZjhmXzBfMF8wXzY1M18xXzNfbG9jLTA=",
    "mogujie_cfav": 1642
  },
  {
    "title": "网红老爹鞋air运动鞋内增高女鞋子反光潮鞋学生跑鞋球鞋情侣鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200322_1g2k93icgf5ikbi902k8ecffad738_650x950.jpg",
    "promotion_price": "161.00",
    "price": "230.00",
    "num_iid": "1mrc136",
    "detail_url": "https://shop.mogu.com/detail/1mrc136?acm=3.ms.1_4_1mrc136.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_561053325_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU2MTA1MzMyNV80ZjhmXzBfMF8wXzg4NF8xXzNfbG9jLTA=",
    "mogujie_cfav": 59
  },
  {
    "title": "小白女鞋子2020年夏季新款网红百搭网面薄款透气平底运动板鞋",
    "pic_url": "https://s5.mogucdn.com/mlcdn/c45406/200725_5d249cjf0h02161d6fjcd362h2a52_640x960.jpg",
    "promotion_price": "76.00",
    "price": "279.00",
    "num_iid": "1mv3r1w",
    "detail_url": "https://shop.mogu.com/detail/1mv3r1w?acm=3.ms.1_1_1mv3r1w.43.28076-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_7-c_2_4_583804010_1549243392_15_0-t_uR9YZs6KDIHCw-lc_4-pit_2-c1_28447_nil_nil_2_1549243392_68_0-dit_&cparam=MTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8xNF81ODM4MDQwMTBfNGI4N18wXzE1XzBfNDM4XzFfMF9ycy0yODQ0Ny5ydC0xLnd0LTE=",
    "mogujie_cfav": 13
  }
]

/* Goods.create(data)
  .then(()=>{
    console.log('成功')
  })
  .catch((err=>{
    console.log(err)
  })) */

module.exports = Goods  //开放商品集合对象