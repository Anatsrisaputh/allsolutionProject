const express = require("express");
const router = express.Router();
const userController = require("../controller/user");


router.get("/", userController.getAllUser);

router.get("/:id", userController.getUserById);

router.post("/", userController.createNewUser);

router.delete("/:id", userController.deleteUserById);

router.put("/:id", userController.editUserById);


module.exports = router;
