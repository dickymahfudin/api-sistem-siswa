const express = require("express");
const router = express.Router();

const absenPelajaranController = require("../controllers/absenPelajaran");

router.get("/", absenPelajaranController.get);
module.exports = router;
