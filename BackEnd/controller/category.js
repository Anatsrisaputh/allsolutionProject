const db = require("../models");

const getCategory = async (req, res) => {
  const allCategory = await db.category.findAll();
  res.send(allCategory);
};

const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const targetCategory = await db.category.findOne({ where: { id: categoryId } });
  
    if (targetCategory) {
      res.send(targetCategory);
    } else {
      res.status(400).send({ message: "Category not found" });
    }
  } catch(err) {
    res.status(500).send({message: err.message})
  }
};

const createNewCategory = async (req, res) => {
  const notebook = req.body.notebook;
  const server = req.body.server;
  const desktop = req.body.desktop;
  const accessory = req.body.accessory;

  const addCategory = await db.category.create(
    {
      Notebook: notebook,
      Server: server,
      Desktop: desktop,
      Accessory: accessory,
    }
  );
  res.status(201).send(addCategory);
};

const editCategory = async (req, res) => {
  const categoryId = req.params.id;
  const notebook = req.body.notebook;
  const server = req.body.server;
  const desktop = req.body.desktop;
  const accessory = req.body.accessory;

  await db.category.update(
    {
      Notebook: notebook,
      Server: server,
      Desktop: desktop,
      Accessory: accessory,
    },
    { where: { id: categoryId } }
  );
  res.status(200).send({ message: `Category id: ${categoryId} has been update` });
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  
  await db.category.destroy({ where: { id: categoryId } });
  res.status(204).send({ message: `Category id: ${categoryId} has been delete` });
};


module.exports = {
  getCategory,
  getCategoryById,
  createNewCategory,
  editCategory,
  deleteCategory
}