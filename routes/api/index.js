const router = require("express").Router();
const travelRoutes = require("./travel");

// Travel state status routes
router.use("/travel", travelRoutes);

module.exports = router;