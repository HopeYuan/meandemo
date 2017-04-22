var express = require('express');
var router = express.Router();

 
// var passport = require('passport');
var Product = require('../models/product');

var foodCart=require('../models/foodcart');

//  var csrfProtection = csrf();

// router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {

	// var products=Product.find();
	Product.find(function (err, docs) {
        var fooditems = [];
        var itemSize = 3;
        for (var i = 0; i < docs.length; i += itemSize) {
            fooditems.push(docs.slice(i, i + itemSize));
        }
        res.render('food/indexs', {title: 'Taking away web', products: fooditems});
    });
});





router.get('/add-to-food-cart/:id', function(req, res, next) {
    var foodId=req.params.id;
    var foodcart=new foodCart(req.session.foodcart ? req.session.foodcart :{});

      Product.findById(foodId, function (err, product) {	
      	if(err){
     		return res.redirect('/');
     	}
       foodcart.add(product,product.id);
       req.session.foodcart = foodcart;
       console.log(req.session.foodcart);

       return res.redirect('/');
    });
	
});


// router.get('/food-cart', function (req, res, next) {

	
//     if (!req.session.foodcart) {
//         return res.render('food/food-cart', {products: null});
//     }

//    // console.log(req.session.foodcart.items);

//     var fooditems = new foodCart(req.session.foodcart.items);
//      console.log(foodcart);
 
    
//     res.render('food/food-cart', {products: fooditems.generateArray(), totalPrice: fooditems.totalPrice});
// });


router.get('/food-cart', function (req, res, next) {
    if (!req.session.foodcart) {
        return res.render('food/food-cart', {products: null});
    }
    var fooditems = new foodCart(req.session.foodcart);
    // console.log(fooditems);
      // req.session.foodcart.items = foodcart;
    // console.log(req.session.foodcart.items);
    res.render('food/food-cart', {products: fooditems.generateArray(), totalPrice: fooditems.totalPrice});
});





// router.get('/user/signup', function(req, res, next) {

//     res.render('user/signup', {csrfToken: req.csrfToken()});

// });

// router.post('/user/signup', passport.authenticate('local.signup', {
//     successRedirect: '/user/profile',
//     failureRedirect: '/user/signup',
//     failureFlash: true
// }));

// router.get('/user/profile', function(req, res, next) {

//     res.render('user/profile');

// });
// router.get('/user/login', function(req, res, next) {

//     res.render('user/login',{csrfToken: req.csrfToken()});

// });

// router.post('/user/login', passport.authenticate('local.login', {
//     successRedirect: '/user/profile',
//     failureRedirect: '/user/login',
//     failureFlash: true
// }));


module.exports = router;
