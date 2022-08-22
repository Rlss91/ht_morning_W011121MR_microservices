const express = require("express");
const router = express.Router();

let animalsArr = ["dog", "cat", "horse", "lama", "fish"];

router.get("/", (req, res) => {
  res.json(animalsArr);
});

router.get("/:filter", (req, res) => {
  res.json(animalsArr.filter((item) => item.includes(req.params.filter)));
});

module.exports = router;
