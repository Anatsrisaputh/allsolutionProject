const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./models");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const itemRoute = require("./routes/item");
const categoryRoute = require("./routes/category");
const warrantyRoute = require("./routes/warranty");

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 


app.use("/user", userRoute);
app.use("/order", orderRoute);
app.use("/item", itemRoute);
app.use("/category", categoryRoute);
app.use("/warranty", warrantyRoute);

// const bodyParser = require('body-parser'); อันนี้เป็นแบบเก่า
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//bodyParser เป็นแบบเก่า แบบใหม่สามารถเขียน แบบนี้ได้เลย

db.sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000")
  })
});