const router = require("express").Router();
const travelController = require("../../controllers/travelController");

// Matches with "/api/travel"
router.route("/")
  .get(travelController.findAll)
  .post(travelController.create);

// Matches with "/api/travel/:id"
router
  .route("/:id")
  .get(travelController.findById)
  .put(travelController.update)
  .delete(travelController.remove);

module.exports = router;