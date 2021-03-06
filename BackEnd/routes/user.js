const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

// console.log(userController.getAllUser)
router.post("/login", userController.login);

router.get("/:id", userController.getUserById);

router.post("/create", userController.createNewUser);

router.delete("/delete/:id", userController.deleteUserById);

router.put("/edit/:id", userController.editUserById);


module.exports = router;


