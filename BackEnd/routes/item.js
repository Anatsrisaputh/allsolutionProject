const express = require("express");
const router = express.Router();
const routerController = require("../controller/item");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img')
  },

  filename: function (req, file, cb) {
    cb(null, 'ssd-'+ Date.now() + '.' + file.mimetype.split('/')[1])
  }
})

const upload = multer({storage});




router.post("/add", upload.single('pic'), routerController.createItem);

router.get("/getall", routerController.getAllItem);

router.get("/checkwarranty", routerController.getIdItem);

router.get("/serial", routerController.getSerialNumber);

router.put("/edit/:id", routerController.editItem);

router.delete("/delete/:id", routerController.deleteItem);


module.exports = router;