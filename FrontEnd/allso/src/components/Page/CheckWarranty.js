import React, { useState } from 'react';
import axios from "../../config/axios";
import "../../style/checkwarranty.css";



function CheckWarranty() {

  const [inputValue, setInputValue] = useState("");
  const [showSerial, setShowSerial] = useState([]);

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  const showSerialNumber = async (e) => {
    e.preventDefault();
    //e.preventDefault(); คือการทำให้ state ใน onChange ไม่หาย
    const showSerial = await axios.get(`/item/serial?id=${inputValue}`);
    console.log({ showSerail: showSerial.data })
    const dataSerial = showSerial.data.map((obj) => {
      return {
        id: obj.id,
        name: obj.Name,
        brand: obj.Brand,
        warrantyStart: obj.WarrantyStart,
        warrantyEnd: obj.WarrantyEnd
      };

    })
    console.log({ data: dataSerial });
    setShowSerial(dataSerial);
  }



  return (
    <div className="grid-container">

      <div className="grid-item item2">
        <form>
          Serial number:	&nbsp;
          <input label="Serialnumber" type="text" id="searchBar"
            value={inputValue} onChange={onChange}></input>
          <button id="searchButton" onClick={showSerialNumber}>Search</button>
        </form>
      </div>

      <div className="grid-item item3">
        {showSerial.map((obj) => <p>{`id : ${obj.id} name: ${obj.name} brand : ${obj.brand} Warranty start : ${obj.warrantyStart} Warranty end: ${obj.warrantyEnd} `}</p>)}
      </div>

    </div>
  )
}

export default CheckWarranty;

