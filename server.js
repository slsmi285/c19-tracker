//import statements 
const mongoose = require("mongoose");//
const express = require("express");//server
const infoStateContoller = require("./controllers/infoStateController");
const router = express.Router();//Mongo Router/endpoint
const passport = require("passport");//authentication library
const cookieParser = require("cookie-parser");//parse all the cookies using for authentication
const bcrypt = require("bcryptjs");//hashing the passwords
const session = require("express-session");//express sessions
const bodyParser = require("body-parser");//parse request and response object- use in middleware
const User = require('./models/user');
const { Router } = require("express");
const routes = require("./routes");
const app = express();



const PORT = process.env.PORT || 3000;

// Middleware - express first two code lines are needed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true

    })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);


//end of middleware

mongoose.connect("mongodb+srv://slsmi285:Florida89!@cluster0.upwzp.mongodb.net/project0?retryWrites=true&w=majority",

    {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    },
    //console.log("Mongoose database connection established");
    () => {
        console.log("Mongoose is Connected");
    }
);





//Routes - passport 
app.post("/login", (req, res, next) => {
    console.log("login");
    passport.authenticate('local', function (err, user, info) {
        console.log("user");
        if (err) { return console.log(err); }
        if (!user) { return res.json({ user, error: "Invalid" }) }

        req.logIn(user, function (err) {
            if (err) { return console.log(err); }
            return res.json({ user });
        });
    })(req, res, next);
});

app.post("/register", async (req, res, next) => {
    console.log(req.body);
    let user = await User.findOne({ username: req.body.username });
    console.log("User console", user);
    //Check if user exists
    if (user) {
        console.log("User exists");
        return res.status(400).json({
            errors: [{ msg: "User already exists." }],
        });
    }

    // password in database will show as "hashed" /"hidden" (for user)
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
    });

    newUser.save().then(response => {
        console.log(response);
        res.send("User Created");
    })
})

app.get("/user", (req, res) => {
    res.send(req.User);//The req.user stores the entire user that has been authenticated inside of it, has all the session data
});

// // Local API for hardcoded infostate 
app.use(routes);
// end of Routes


// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

