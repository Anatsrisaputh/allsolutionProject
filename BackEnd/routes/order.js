const express = require("express");
const router = express.Router();
const orderController = require("../controller/order")



router.get("/getallorder", orderController.getAllOrder);

router.get("/getorder/:id", orderController.getOrderById);

router.post("/createorder", orderController.createOrder);

router.delete("/delete/:id", orderController.deleteOrderById);

router.put("/edit/:id", orderController.editOrderId);



module.exports = router;
