const db = require("../models");

const getAllOrder = async (req, res) => {
  const allOrder = await req.order.findAll();
  res.send(allOrder);
};

const getOrderById = async (req, res) => {
  const orderId = req.params.id;
  const order = await db.order.findOne({ where: { id: orderId } });

  if (order) {
    res.send(order);
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

const deleteOrderById = async (req, res) => {
  const orderId = req.params.id;

  await db.order.destroy({ where: { id: orderId } });
  res.status(204).send(`Order id: ${orderId} has been delete`);
};

const editOrderId = async (req, res) => {
  const editId = req.params.id;
  const orderhistory = req.body.orderhistory;
  const ordernumber = req.body.ordernumber;
  const quantity = req.body.quantity;

  await db.order.update(
    {
      OrderHistory: orderhistory,
      OrderNumber: ordernumber,
      Quantity: quantity
    },
    { where: { id: editId } }
  );
  res.status(200).send(`Order id: ${editId} has been edit`);
}



module.exports = {
  getAllOrder,
  getOrderById,
  createOrder,
  deleteOrderById,
  editOrderId
}


