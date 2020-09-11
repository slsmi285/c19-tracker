const mongoose = require("mongoose");
const db = require("../models");

// This file empties the travel collection and inserts the books below

mongoose.connect (
    process.env.MONGODB_URI ||
    "mongodb://localhost/travel"
);

const dailySeed = [
    {
      state: "",
      restrictions: "",
      masks: "",
      href: ""
    },
    
]