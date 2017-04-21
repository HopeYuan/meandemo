
var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    User.findOne({'email':email}),function(err,user){
    	if (err) {
    		return done(err);

    	}if (user){
    		return done(null,false,{message:'Eamil is already in use.'});
    	}
    	var newuser=new User();
    	newuser.eamil=eamil;
    	// newuser.password=password;
    	newuser.password = newuser.encryptPassword(password);
       
    	newuser.save(function(err, result) {
            if (err) {
                return done(err);
            }
            return done(null, newuser);
        });
    } 
}));