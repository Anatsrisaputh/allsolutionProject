const db = require("../models");

const createItem = async (req, res) => {  
  const id = req.params.id;
  const {  name, price, brand, quantity, warrantystart, warrantyend} = req.body;
  const image = req.file;
  console.log(image);

  const targetPath = image.path.slice(7)
  
  const addItem = await db.item.create(
    {
      Image: targetPath,
      Name: name,
      Price: price,
      Brand: brand,
      Quantity: quantity,
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
  const idItem = req.query.id;
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
  const id = req.params.id;
  const { image, name, price, brand, quantity, } = req.body;

   await item.update(
    {
      id: id,
      Image: image,
      Price: price,
      Name: name,
      Brand: brand,
      Quantity: quantity,
    },
    { where: {id: id}}
  );
  res.status(200).send({ message: `Item id ${id} has been update`});
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