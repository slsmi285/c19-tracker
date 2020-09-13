//All config using for passport to authenticate a user thru passport
//bcrypt is used to unhash the password
//parameter passed to this function  -- passport library -- to use thruout the entire app

const db = require('./models');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


module.exports = function (passport) {
    //defining local strategy for passport, use this local strategy everytime it runs
    // lookup User in db, will get err or user.
    //done method - null is err and false is user...if user compare with bcrypt
    passport.use(
        new LocalStrategy((username, password, done) => {
            db.User.findOne({ username: username }, (err, user) => {
                if (err) return done(err, false);
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);//comparison failed, no user-done
                        console.log("Wrong password")
                    }
                });
            });
        })
    );
    //passport requires a serialize and deserialize user function -- authenticate
    // serialize - stores a cookie (user id inside of it)within the browser, deserialize - unravels that cookie returns a user from it
    // deserialize unravels -- find the user in the database that matches the id for the return
    passport.serializeUser(function(user, cb) {
        cb(null, user.username);
    });
      
    passport.deserializeUser(function(username, cb) {
        db.User.findOne({ username }, (err, user) => {
            if (err) { return cb(err); }
            cb(null, user);
        })
    });
};
