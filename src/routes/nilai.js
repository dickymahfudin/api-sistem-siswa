const express = require("express");
const router = express.Router();

const nilaiController = require("../controllers/nilai");

router.post("/", nilaiController.create);
router.get("/", nilaiController.get);
router.put("/:id", nilaiController.update);
router.delete("/:id", nilaiController.destroy);
module.exports = router;
