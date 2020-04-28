const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
// const categoryRoute = require('./routes/category');



// app.use('/category', categoryRoute);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



db.sequelize.sync({force: false}).then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000")
  })
});