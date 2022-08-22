const express = require("express");
const router = express.Router();
const ownerRouter = require("./owner");

router.use("/owner", ownerRouter);

module.exports = router;
