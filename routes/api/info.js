// Dependencies
const router = require("express").Router();
const infoStateController = require("../../controllers/infoStateController");

// Matches with "/api/info"
router.route("/").get(infoStateController.findAll);

// Matches with "/api/info/stateinfo"
router
  .route("/:id")
  .get(infoStateController.findById);


module.exports = router;