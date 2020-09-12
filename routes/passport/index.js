const router = require("express").Router();
const passportRoutes = require("./passport");

// Passport routes
router.use("/passport", passportRoutes);

module.exports = router;