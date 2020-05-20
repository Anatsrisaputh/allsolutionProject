const db = require("../models");

const createItem = async (req, res) => {  
  const id = req.body.id;
  const image = req.body.image;
  const name = req.body.name;
  const price = req.body.price;
  const brand = req.body.brand;
  const quantity = req.body.quantity;
  const warrantystart = req.body.warrantystart;
  const warrantyend = req.body.warrantyend;
  
  const addItem = await db.item.create(
    {
      id: id,
      Image: image,
      Name: name,
      Price: price,
      Brand: brand,
      Quantity: quantity,
      WarrantyStart: warrantystart,
      WarrantyEnd: warrantyend,
    }
  )
  res.status(201).send(addItem);
  console.log("Add new item success");
};

const getAllItem = async (req, res) => {
  const allItem = await db.item.findAll();
  res.send(allItem);
};

const getIdItem = async (req, res) => {
  const idItem = (req.query.id);
  const targetItem = await db.item.findOne({ where: { id: idItem }});
  
  if (targetItem) {
    res.send(targetItem);
  } else {
    res.status(400).send({ message: "Item not found" });
  }

};

const getSerialNumber = async (req, res) => {
  const id = req.query.id;

  const searchItem = await db.item.findAll({ where: { id: id }});
  console.log(searchItem);
  if (searchItem) {
    res.send(searchItem);
  } else {
    res.status(400).send({ message: "Serial number not found" });
  }

};

const editItem = async (req, res) => {
  const id = req.body.id;
  const image = req.body.image;
  const name = req.body.name;
  const price = req.body.price;
  const brand = req.body.brand;
  const quantity = req.body.quantity;
  const warrantystart = req.body.warrantystart;
  const warrantyend = req.body.warrantyend;

   await item.update(
    {
      id: id,
      Image: image,
      Price: price,
      Name: name,
      Brand: brand,
      Quantity: quantity,
      WarrantyStart: warrantystart,
      WarrantyEnd: warrantyend,
    },
    { where: {id: idItem}}
  );
  res.status(200).send({ message: `Item id ${idItem}`});
};

const deleteItem = async (req, res) => {
  const idTarget = req.params.id;
  await db.item.destroy({ where: { id: idTarget}});
  res.status(204).send({ message: `Iteme id ${idTarget} has been delete`});
};


module.exports = {
  createItem,
  getAllItem,
  getIdItem,
  editItem,
  deleteItem,
  getSerialNumber
}