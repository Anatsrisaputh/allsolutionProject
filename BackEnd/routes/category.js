const express = require("express");
const router = express.Router();
const routerController = require("../controller/category");


router.get("/getall", routerController.getCategory);

router.get("/get/:id", routerController.getCategoryById);

router.post("/add", routerController.createNewCategory);




module.exports = router;
