const db = require("../models");

const getAllOrder = async (req, res) => {
  const allOrder = await req.order.findAll();
  res.send(allOrder);
};

const getOrserById = async (req, res) => {
  const orderId = req.params.id;
  const targetId = await db.order.findOne({ where: { id: orderId }});

  if (orderId) {
    res.send(targetId);
  } else {
    res.status(400).send("Order not found");
  }
};

const createOrder = async (req, res) => {
  const orderhistory = req.body.orderhistory;
  const ordernumber = req.body.ordernumber;
  const quantity = req.body.quantity;

  const newOrder = await db.order.create(
    {
      OrderHistory: orderhistory,
      OrderNumber: ordernumber,
      Quantity: quantity
    }
  )
  res.status(201).send(newOrder);
  // console.log("New order has been create");
};



module.exports = {
  getAllOrder,
  getOrserById,
  createOrder
}


