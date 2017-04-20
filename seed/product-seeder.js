var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/takeawayweb');

var products = [
    new Product({
        imagePath: 'https://i.ytimg.com/vi/mdaBIhgEAMo/hqdefault.jpg',
        title: 'Sweet and sour pork',
        
        price: 10
    }),
    new Product({
        imagePath:'http://www.learnasia.org/uploads/6/9/0/8/69084411/947252_orig.jpeg',
    title:'Peking duck',
    price:15
    }),
    new Product({
       imagePath:'http://i2.cdn.cnn.com/cnnnext/dam/assets/150203150151-chinese-food-spicy-crayfish-super-169.jpg',
   title:'Crawfish',
   price:15
    }),new Product({
       imagePath:'http://oeimg1.cache.oeeee.com/201311/20/528c61419260e.jpg',
   title:'Hotpot',
   price:20
    }),

    new Product({
       imagePath:'http://www.kingchefphoenixville.com/images/banner03.jpg',
   title:'Fried rice',
   price:12
    }),
    new Product({
        imagePath:'http://s2.cdn.xiachufang.com/e391c41c890111e6a9a10242ac110002_1000w_663h.jpg?imageView2/2/w/620/interlace/1/q/90',
   title:'Noodle',
   price: 5
    })
];













// var length1=0;

// for(var i = 0; i < product.length;i++){
//     product[i].save(function(err,result){
//     	length1++;
//     	if(length1===product.length){
//     		quit();
//     	}
//     });
  
// }
// function  quit(){
// 	mongoose.disconnect();

// }

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}





