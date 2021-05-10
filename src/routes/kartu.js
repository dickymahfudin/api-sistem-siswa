const express = require("express");
const router = express.Router();

const kartuController = require("../controllers/kartu");

router.get("/", kartuController.get);
router.put("/", kartuController.update);
module.exports = router;
