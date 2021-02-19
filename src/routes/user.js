const express = require("express");
const router = express.Router();
const middleware = require("../helpers/middlewareToken");

const usersController = require("../controllers/user");

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.put("/:id", middleware, usersController.update);
router.delete("/:id", middleware, usersController.destroy);
router.get("/", middleware, usersController.get);
module.exports = router;
