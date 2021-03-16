const express = require("express");
const router = express.Router();

const absenController = require("../controllers/absen");

router.get("/alat/:absen", absenController.absen);
router.get("/user", absenController.user);
router.get("/", absenController.get);
module.exports = router;
