// Dependencies
const router = require("express").Router();
const infoStateController = require("../../controllers/infoStateController");

// Matches with "/api/info"
router.route("/").get(infoStateController.findOne);

// Matches with "/api/info/:id"
// router
//   .route("/region")
//   .get(infoStateController.findOne)


module.exports = router;