import React, { useState } from 'react';
import axios from "../../config/axios";
import "../../style/checkwarranty.css";



function CheckWarranty() {

  const [inputValue, setInputValue] = useState("");
  // const [showData, setShowData] = useState({});

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  const showSerialNumber = async ()=> {
   console.log(inputValue);
   const id = inputValue;
  const serial = await axios.get("/item/getid/", id);
  console.log(serial)
  }

  return (
    <div className="grid-container">

      <div className="grid-item item2">
        <form>
          Serial number:	&nbsp;
          <input label="Serialnumber"type="text" id="searchBar" 
          value={inputValue} onChange={onChange}></input>
          <button id="searchButton" onClick={showSerialNumber}>Search</button>
        </form>
      </div>

      <div className="grid-item item3">
        {/* {showData} */}
      </div>

    </div>
  )
}

export default CheckWarranty;

