// Importing models
const db = require("../models");

// Defining methods for the infoController - changed to "Info", from "Infostate"
module.exports = {
    findOne: function(req, res) {
      db.InfoStates
        .find(req.params)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
 
  };