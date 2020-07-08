const db = require("../models");

const createWarranty = async (req, res) => {
  const {serial_id, warranty_start, warranty_end} = req.body;
  const checkSerial = await db.warranty.findOne({ where: {serial_id: serial_id}})
  if ( !checkSerial) {
     await db.warranty.create({
      serial_id: serial_id,
      warranty_start: warranty_start,
      warranty_end: warranty_end
    })
    return res.status(201).send({message: `Serial Number ${checkSerial} has been create`});
  } else {
    return res.status(400).send({message: "Serial number already in systems, please recheck again"});
  }
};

const editWarranty = async (req, res) => {
  const {serial_id, warranty_start, warranty_end} = req.body;
  await db.warranty.update({
    warranty_start: warranty_start,
    warranty_end: warranty_end
  }, {where: {serial_id: serial_id}});
  res.status(200).send({ message: `serial_id: ${serial_id} has been update` });
}


module.exports = {createWarranty, editWarranty};