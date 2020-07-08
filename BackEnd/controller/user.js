const db = require("../models");
const bcrypt = require("bcryptjs");

const getAllUser = async (req, res) => {
  const allUser = await req.user.findAll();
  res.send(allUser);
};

const getUserById = async (req, res) => {
  const idUser = Number(req.params.id);
  const targetUser = await db.user.findOne({ where: { id: idUser } });

  if (targetUser) {
   return res.send(targetUser);
  } else {
   return res.status(400).send("User not found");
  }
};


const createNewUser = async (req, res) => {
  const {name, email, password} = req.body;
  const checkUser = await db.user.findOne( { where: { Email: email }});
    if (!checkUser) {
      const salt = bcrypt.genSaltSync(12);
      const hashPassword = bcrypt.hashSync(password, salt);
      await db.user.create(
        {
          Name: name,
          Email: email,
          Password: hashPassword,
        }
      );
      res.status(201).send({ message: "User create"});
    } else {
      res.status(400).send({ message: " Email already taken"});
    }
};

const editUserById = async (req, res) => {
  const userId = req.params.id;
  const {sex, name, email, telephoneNumber, mobilePhoneNumber, address, villageBuilding, distric, province} = req.body;
  await db.user.update(
    {
      Sex: sex,
      Name: name,
      Email: email,
      Telephone: telephoneNumber,
      Phone_Number: mobilePhoneNumber,
      Address: address,
      VillageBuilding: villageBuilding,
      Distric: distric,
      Province: province
    },
    { where: { id: userId } }
  );
  res.status(200).send({ message: `User id: ${userId} has been update` });
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;

  await db.user.destroy({ where: { id: userId } });
  res.status(204).send("User has been delete");
};

module.exports = {
  getAllUser,
  getUserById,
  createNewUser,
  editUserById,
  deleteUserById,
}