// Dependencies
const router = require("express").Router();
const infoRoutes = require("./info");

// Info routes
router.use("/info", infoRoutes);
// Exporting
module.exports = router;