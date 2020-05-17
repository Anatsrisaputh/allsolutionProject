import React, { useState } from 'react';
// import axios from "../../config/axios";
import "../../style/checkwarranty.css";


function CheckWarranty() {

  const [showData, setShowData] = useState({});

  return (
    <div className="grid-container">

      <div className="grid-item item2">
        <form>
          Serial number:	&nbsp;
          <input label="Serialnumber"type="text" id="searchBar"></input>
          <button id="searchButton">Search</button>
        </form>
      </div>

      <div className="grid-item item3">
        Show state
      </div>

    </div>
  )
}

export default CheckWarranty;

