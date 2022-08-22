const express = require("express");
const router = express.Router();
const axios = require("axios");

let ownersArr = [
  { name: "kenny", animalId: 0 },
  { name: "john", animalId: 1 },
  { name: "james", animalId: 2 },
];

router.get("/", async (req, res) => {
  try {
    let data = await axios.get("http://localhost:3000/api/animal");
    console.log("data", data.data);
    let newOwenerArr = [];
    for (let ownerItem of ownersArr) {
      newOwenerArr = [
        ...newOwenerArr,
        { name: ownerItem.name, animalName: data.data[ownerItem.animalId] },
      ];
    }
    res.json(newOwenerArr);
  } catch (err) {}
});

module.exports = router;
