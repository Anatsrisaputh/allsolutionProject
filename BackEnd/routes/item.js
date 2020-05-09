const express = require("express");
const router = express.Router();
const routerController = require("../controller/item");


router.post("/add", routerController.createItem);

router.get("/getall", routerController.getAllItem);

router.get("/getid/:id", routerController.getIdItem);

router.put("/edit/:id", routerController.editItem);

router.delete("/delete/:id", routerController.deleteItem);


module.exports = router;