const db = require("../models");

const createItem = async (req, res) => {  
  const image = req.body.image;
  const price = req.body.price;
  const brand = req.body.brand;
  const quantity = req.body.quantity;
  const serialnumber = req.body.serialnumber;
  const warrantystart = req.body.warrantystart;
  const warrantyend = req.body.warrantyend;
  const  warrantyperiod = req.body.warrantyperiod;
  
  const addItem = await db.item.create(
    {
      Image: image,
      Price: price,
      Brand: brand,
      Quantity: quantity,
      Serialnumber: serialnumber,
      WarrantyStart: warrantystart,
      WarrantyEnd: warrantyend,
      Warrantyperiod: warrantyperiod
    }
  )
  res.status(201).send(addItem);
  console.log("Add new item success");
};

const getAllItem = async (req, res) => {
  const allItem = await req.item.findAll();
  res.send(allItem);
};

const getIdItem = async (req, res) => {
  const idItem = Number(req.params.id);
  const targetItem = await item.findOne({ where: { id: idItem }});
  
  if (targetItem) {
    res.send(targetItem);
  } else {
    res.status(400).send({ message: "Item not found" });
  }

};

const editItem = async (req, res) => {
  const image = req.body.image;
  const price = req.body.price;
  const brand = req.body.brand;
  const quantity = req.body.quantity;
  const serialnumber = req.body.serialnumber;
  const warrantystart = req.body.warrantystart;
  const warrantyend = req.body.warrantyend;
  const  warrantyperiod = req.body.warrantyperiod;
  const idItem = req.params.id;

  const newItem = await item.update(
    {
      Image: image,
      Price: price,
      Brand: brand,
      Quantity: quantity,
      Serialnumber: serialnumber,
      WarrantyStart: warrantystart,
      WarrantyEnd: warrantyend,
      Warrantyperiod: warrantyperiod
    }
  )
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
}