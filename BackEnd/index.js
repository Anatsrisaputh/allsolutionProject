const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models/Index')
const userRoute = require("./routes/user");

// const bodyParser = require('body-parser');



app.use("/user", userRoute);




app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//bodyParser เป็นแบบเก่า แบบใหม่สามารถเขียน แบบนี้ได้เลย
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 


db.sequelize.sync({ force: true }).then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000")
  })
});