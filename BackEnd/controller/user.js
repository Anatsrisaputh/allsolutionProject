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
    res.send(targetUser);
  } else {
    res.status(400).send("User not found");
  }
};


const createNewUser = async (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const checkUser = await db.user.findOne( { where: { Email: email }});
    if (!checkUser) {
      const salt = bcrypt.genSaltSync(12);
      const hashPassword = bcrypt.hashSync(password, salt);
      const newUser = await db.user.create(
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
  const sex = req.body.sex;
  const name = req.body.name;
  const email = req.body.email;
  const telephoneNumber = req.body.telephoneNumber;
  const mobilePhoneNumber = req.body.mobilePhoneNumber;
  const address = req.body.address;
  const villageBuilding = req.body.villageBuilding;
  const distric = req.body.distric;
  const province = req.body.province;

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