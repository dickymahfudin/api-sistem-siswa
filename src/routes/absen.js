const express = require("express");
const router = express.Router();

const absenController = require("../controllers/absen");

router.get("/:absen", absenController.absen);
router.get("/", absenController.get);
module.exports = router;
