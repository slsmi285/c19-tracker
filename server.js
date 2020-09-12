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
const User = require('./user');
let travel = require("./models");
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware - express first two code lines are needed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//important to this code -- need this in order for this to work with credentials
app.use(
    cors({
        origin: "http://localhost:3001", //<-- location of the react app we are connecting to
        credentials: true
    })
);
// Serve up static assets (usually on heroku)
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
    () => {
        console.log("Mongoose is Connected");
    }
);




//Router - Mongo
app.use(cors());
//calling the router/endpoint
app.use("/", router);

//use the find() method to retrieve all the documents from the mandates collection
router.route("/getData").get(function (req, res) {
    mandates.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

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
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            //using below code to encrypt the password to a number -- 10 as the "salt", this is to avoid breach - removed "await" due to 
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


// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

