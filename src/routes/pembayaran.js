const express = require("express");
const router = express.Router();

const pembayaranController = require("../controllers/pembayaran");

router.post("/", pembayaranController.create);
router.get("/", pembayaranController.get);
router.delete("/:id", pembayaranController.destroy);
module.exports = router;
