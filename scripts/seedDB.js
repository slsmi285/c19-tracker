const mongoose = require("mongoose");
const db = require("../models");

// This file empties the travel collection and inserts the books below

mongoose.connect (
    process.env.MONGODB_URI ||
    "mongodb://localhost/travelstates"
);

const dailySeed = [
    {
      state: "",
      restrictions: "",
      masks: "",
      href: ""
    },
    {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      },
      {
        state: "",
        restrictions: "",
        masks: "",
        href: ""
      }
    
];

db.Daily 
    .remove({})
    .then(() => db.Daily.collection.insertMany(dailySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
