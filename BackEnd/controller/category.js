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
  const {notebook, server, desktop, ssd} = req.body;
  try {
    await db.category.create(
      {
        Notebook: notebook,
        Server: server,
        Desktop: desktop,
        SSD: ssd,
      }
    );
  } catch(err) {
    res.status(201).send({message: err});
  }
  
};

const editCategory = async (req, res) => {
  const {notebook, server, desktop, ssd} = req.body;
  try {
    await db.category.update(
      {
        Notebook: notebook,
        Server: server,
        Desktop: desktop,
        SSD: ssd,
      },
      { where: { id: categoryId } }
    );
  } catch(err) {
    res.status(200).send({ message: err });
  }
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