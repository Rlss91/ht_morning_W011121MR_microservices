const express = require("express");
const router = express.Router();
const animalRouter = require("./animal");

router.use("/animal", animalRouter);

module.exports = router;
