var express = require('express');
var router = express.Router();
var Product = require('../models/product');
  var csrf=require('csurf');
var session = require('express-session');


 var csrfProtection = csrf();

router.use(csrfProtection);
// var FoodItem=require('..models/fooditem')
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


router.get('/user/signup', function(req, res, next) {

    res.render('user/signup', {csrfToken: req.csrfToken()});

});

router.post('/user/signup', function(req, res, next) {
 res.redirect('/');
});




module.exports = router;
