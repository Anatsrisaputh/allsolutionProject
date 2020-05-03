const db = require("../models/user");

const getAllUser = async (req, res) => {
  const allUser = await req.user.findAll();
  res.send(allUser);
};

const getUserById = async (req, res) => {
  const idUser = Number(req.params.id);
  const targetUser = await db.user.findOne({ where: {id: idUser}});

  if (targetUser) {
    res.send(targetUser);
  } else {
    res.status(400).send("User not found");
  }
};

// const createNewUser =  (req, res) => {
//   const Sex = req.body.sex;
//   const Name = req.body.name;
//   const Email = req.body.email;
//   const Telephone_Number = req.body.telephoneNumber;
//   const Phone_Number = req.body.mobileNumber;
//   const Address = req.body.address;
//   const village/ = req.body.villageOrBuilding;

// }









module.exports = {
  getAllUser,
  getUserById
}