// Importing models
const db = require("../models");

// Defining methods for the infoController - changed to "Info", from "Infostate"
module.exports = {
  findAll: function(req, res) {
    db.InfoStates
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    findById: function(req, res) {
      db.InfoStates
        .findById(req.params._id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
 
  };