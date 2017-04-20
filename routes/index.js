var express = require('express');
var router = express.Router();
// var FoodItem=require('..models/fooditem')
/* GET home page. */
router.get('/', function(req, res, next) {
	// var fooditems=FoodItem.find();
  res.render('food/indexs', { title: 'Take away app' });
  // res.render('food/indexs', { title: 'Take away app' ,fooditems:fooditems});

});

module.exports = router;
