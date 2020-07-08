const express = require("express");
const router = express.Router();
const warrantyController = require("../controller/warranty");

router.post("/create", warrantyController.createWarranty);


module.exports = router;