const router = require("express").Router();
const infoController = require("../../controllers/infoController");

// Matches with "/api/travel"
router.route("/")
  .get(infoController.findAll)
  .post(infoController.create);

// Matches with "/api/travel/:id"
router
  .route("/:id")
  .get(infoController.findById)
  .put(infoController.update)
  .delete(infoController.remove);

module.exports = router;