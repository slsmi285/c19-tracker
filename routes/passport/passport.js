//import statements 
const mongoose = require("mongoose");//
const express = require("express");//server
const router = express.Router();//Mongo Router/endpoint
const cors = require("cors");//security cross origin
const passport = require("passport");//authentication library
const passportLocal = require("passport-local").Strategy;//using local
const cookieParser = require("cookie-parser");//parse all the cookies using for authentication
const bcrypt = require("bcryptjs");//hashing the passwords
const session = require("express-session");//express sessions
const bodyParser = require("body-parser");//parse request and response object- use in middleware
const User = require('user');
let mandates = require("./model");
const app = express();

//Routes - passport 
app.post("/login", (req, res) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.login(user, err => {
                if (err) throw err;
                res.send('Successfully Authenticated');
            })
        }
    })(req, res, next);
});
app.post("/register", (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            //using below code to encrypt the password to a number -- 10 as the "salt", this is to avoid breach
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                // password in database will show as "hashed" /"hidden"
                password: hashedPassword,
            });
            await newUser.save()
            res.send("User Created");
        }
    });
});
app.get("/user", (req, res) => {
    res.send(req.User);//The req.user stores the entire user that has been authenticated inside of it, has all the session data
});
// end of Routes

module.exports = app;