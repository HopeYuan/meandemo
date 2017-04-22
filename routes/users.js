var express = require('express');
var router = express.Router();
 var csrf=require('csurf');
var session = require('express-session');
var passport = require('passport');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// module.exports = router;


var csrfProtection = csrf();

router.use(csrfProtection);


router.get('/warning', isloggedin,function(req, res, next) {

    res.render('user/warning');

});



router.get('/logout', isloggedin, function (req, res, next) {
    req.logout();
    res.redirect('/');
});
router.use('/', isnotloggedin, function(req, res, next) {
   next();
});





router.get('/signup', function(req, res, next) {

    res.render('user/signup', {csrfToken: req.csrfToken()});

});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: 'user/signup',
    failureFlash: true
}));


router.get('/login', function(req, res, next) {

    res.render('user/login',{csrfToken: req.csrfToken()});

});

router.post('/login', passport.authenticate('local.login', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
}));





module.exports = router;




function isloggedin(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function isnotloggedin(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}


