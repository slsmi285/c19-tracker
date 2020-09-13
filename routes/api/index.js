const router = require("express").Router();
const infoRoutes = require("./info");

// Travel state status routes
router.use("/info", infoRoutes);

module.exports = router;