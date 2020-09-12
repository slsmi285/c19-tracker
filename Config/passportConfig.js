//All config using for passport to authenticate a user thru passport
//bcrypt is used to unhash the password
//parameter passed to this function  -- passport library -- to use thruout the entire app

const User = require('user');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;


module.exports = function (passport) {
//defining local strategy for passport, use this local strategy everytime it runs
// lookup User in db, will get err or user.
//done method - null is err and false is user...if user compare with bcrypt
passport.use(
    new localStrategy((username, passport, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) throw err;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                return done(null, user);
            } else {
                return done(null, false);//comparison failed, no user-done
            }
         });
      });
    }) 
  );
  //passport requires a serialize and deserialize user function -- authenticate
  // serialize - stores a cookie (user id inside of it)within the browser, deserialize - unravels that cookie returns a user from it
  //deserialize unravels -- find the user in the database that matches the id for the return
  passport.serializeUser((user,cb) => {
      cb(null, user.id);
  })
  passport.deserializUser((id,db) => {
      User.findOne({_id: id}, (err,user) => {
          //cb(err,user); 
        const userInformation = {
            username: user.username};//customizing, only storing the username object
            cb(err, userInformation);
      });
  });
};
