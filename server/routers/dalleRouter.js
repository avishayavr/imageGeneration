const express = require("express");
const router = express.Router();

const { massage, newImage } = require("../controllers/dalleConroller");

router.get("/", massage);
router.post("/", newImage);

module.exports = router;
