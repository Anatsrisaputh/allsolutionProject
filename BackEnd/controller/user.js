const db = require("../models");

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
  const sex = req.body.sex;
  const name = req.body.name;
  const email = req.body.email;
  const telephoneNumber = req.body.telephoneNumber;
  const mobilePhoneNumber = req.body.mobilePhoneNumber;
  const address = req.body.address;
  const villageBuilding = req.body.villageBuilding;
  const distric = req.body.distric;
  const province = req.body.province;

  const newUser = await db.user.create(
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
    }
  );
  res.status(201).send(newUser);
  console.log("Create new user secceed");
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
    }
  );

  res.status(200).send({message: `User id: ${userId} has been update`});

};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  await db.user.destroy({ where: {id: userId} });
  res.status(204).send("User has been delete");
};









module.exports = {
  getAllUser,
  getUserById,
  createNewUser,
  editUserById,
  deleteUser,
}