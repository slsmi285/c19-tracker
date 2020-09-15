//import statements 
const mongoose = require("mongoose");//
const express = require("express");//server
const cors = require("cors");
const infoRoutes = express.Router();
const infoStateContoller = require("./controllers/infoStateController");
const router = express.Router();//Mongo Router/endpoint
const passport = require("passport");//authentication library
const passportLocal = require("passport-local").Strategy;//using local
const cookieParser = require("cookie-parser");//parse all the cookies using for authentication
const bcrypt = require("bcryptjs");//hashing the passwords
const session = require("express-session");//express sessions
const bodyParser = require("body-parser");//parse request and response object- use in middleware
const User = require('./models/user');
const { InfoState } = require("./models");
const { Router } = require("express");
//let travel = require("./models");
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware - express first two code lines are needed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//important to this code -- need this in order for this to work with credentials
// app.use(
//     cors({
//         origin: "http://localhost:3000", //<-- location of the react app we are connecting to
//         credentials: true
//     })
// );
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
    //console.log("Mongoose database connection established");
    () => {
        console.log("Mongoose is Connected");
    }
);

// // Local API for hardcoded infostate 
// app.use(routes);

// //use the find() method to retrieve all the documents from the infostate collection from mongodb
// router.route("/getData").get(function (req, res) {
//     infostate.find({}, function (err, result) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

router.route('/').get(infoStateContoller.findOne);
// middleware for api of mongo InfoState
//const infoRoutes = express.Router();
app.get('/info', infoRoutes);
// to access the info list data in json format/
infoRoutes.route('/').get(function (req, res) {
    let region = req.params;
    InfoStates.findOne(region, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(res)
            res.json(info);
        }
    })

});
// URL parameter id which can be accessed via req.params.id. This id is passed into the call of Info.findById to retrieve an issue item based on it’s ID.

// InfoState.findOne(region, function (err, info) {
//     res.json(info);
// });
// infoRoutes.route('/update/:id').post(function (req, res) {
//     Info.findById(req.params.id, function (err, info) {
//         if (!info) {
//             res.status(404).send("data is not found");
//             // used to update the user if there is any present data
//         } else {
//             info.info_stateinfo = req.body.info_stateinfo;
//             info.info_restrictions = req.body.info_restricitions;
//             info.info_masks = req.body.info_masks;
//             info.info_href = req.body.info_href;
//             info.save().then(info => {
//                 res.json('Info updated!');

//             })
//                 .catch(err => {
//                     res.status(400).send("Update not possible");
//                 });
//         }
//     })
// })


//  with this post request, you will be able to add a new item in your info list
// infoRoutes.route('/add').post(function (req, res) {
//     let info = new Info(req.body);
//     info.save()
//         .then(info => {
//             res.status(200).json({ 'info': 'info added successfully' });
//         })
//         .catch(err => {
//             res.status(400).send('adding new info failed');
//         });
//     })
    //------------------------------------------------------------------

    //Routes - passport 
    app.post("/login", (req, res, next) => {
        passport.authenticate('local', function (err, user, info) {
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
    // end of Routes


    // Start the API server
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });

