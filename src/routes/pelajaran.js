const express = require("express");
const router = express.Router();

const pelajaranController = require("../controllers/pelajaran");

router.post("/", pelajaranController.create);
router.get("/", pelajaranController.get);
router.delete("/:id", pelajaranController.destroy);
router.put("/:id", pelajaranController.update);
module.exports = router;
