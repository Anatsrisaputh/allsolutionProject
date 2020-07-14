const db = require("../models");

const createWarranty = async (req, res) => {
  
  try {
    const {serial_id, warranty_start, warranty_duration_years, warranty_duration_months} = req.body;
    const newWarrantyStart = warranty_start.split("-");
    const end_year = (Number(newWarrantyStart[0]) + Number(warranty_duration_years));
    const end_month = (Number(newWarrantyStart[1]) + Number(warranty_duration_months));
    const end_day = (newWarrantyStart[2]);
    console.log({end_year,end_month});
    console.log(`${end_year}-${end_month}-${end_day}`);
    const end_warranty = `${end_year}-${end_month}-${end_day}`;
    const date_end_warranty = new Date(end_warranty);
    console.log(date_end_warranty);


    const checkSerial = await db.warranty.findOne({ where: {serial_id: serial_id}})
    if ( !checkSerial) {
       await db.warranty.create({
        serial_id: serial_id,
        warranty_start: warranty_start,
        warranty_end: date_end_warranty,
        warranty_duration_years: warranty_duration_years,
        warranty_duration_months: warranty_duration_months
      })
      return res.status(201).send({message: `Serial Number ${checkSerial} has been create`});
    } else {
      return res.status(400).send({message: "Serial number already in systems, please recheck again"});
    }
  } catch(err) {
    res.status(500).send({message: err.message})
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