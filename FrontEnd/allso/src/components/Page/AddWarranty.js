import React, { useState } from 'react'
import "../../style/addWarranty.css"
import axios from "../../config/axios"

export default function AddWarranty() {

  const [serialValue, setSerialValue] = useState("");
  const [warrantyStartValue, setWarrantyStartValue] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");

  const onChangeSerial = (e) => {
    setSerialValue(e.target.value);
  }

  const onChangeWarrantyStart = (e) => {
    setWarrantyStartValue(e.target.value);
  }

  const onChangeYears = (e) => {
    setYears(e.target.value);
  }

  const onChangeMonths = (e) => {
    setMonths(e.target.value);
  }

  const submitFn = async (e) => {
    const body = {
      serial_id: serialValue,
      warranty_start: warrantyStartValue,
      warranty_duration_years: years,
      warranty_duration_months: months
    }
    console.log(body);
    e.preventDefault();
    await axios.post("/warranty/create", body);
    setSerialValue("");
    alert("Warranty has been create");
  }

  return (
    <div className="create-items-main">
      <div className="create-form">

        {/* Form input */}
        <form>
          <label for="serialNumber">Serial Number :</label> <br />
          <input type="text" value={serialValue} onChange={onChangeSerial}/> <br /><br />
          
          <label for="warrantyStart">Warranty Start :</label> <br />
          <input type="date" value={warrantyStartValue} onChange={onChangeWarrantyStart} /> <br /><br />


          <label for="warrantyPeriod">Warranty Period :</label> <br />

          <input type="text" value={years} onChange={onChangeYears} ></input> &nbsp; Years <br /><br />

          <input type="text" value={months} onChange={onChangeMonths}></input> &nbsp; Months <br /><br />
         

          <button id="btnSubmitAddWarranty" onClick={submitFn}>Submit</button>

          
        </form>
      </div>
    </div>
  )
}
