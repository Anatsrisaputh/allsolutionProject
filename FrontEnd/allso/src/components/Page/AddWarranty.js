import React, { useState } from 'react'
import "../../style/createitems.css"

export default function AddWarranty() {

  const [serialValue, setSerialValue] = useState("");
  const [warrantyStartValue, setWarrantyStartValue] = useState("");
  const [threeYears, setThreeYears] = useState("");

  const onChangeSerial = (e) => {
    setSerialValue(e.target.value);
  }

  const onChangeWarrantyStart = (e) => {
    setWarrantyStartValue(e.target.value);
  }

  const onChangeThreeYears = (e) => {
    setThreeYears(e.target.value);
  }

  return (
    <div className="create-items-main">
      <div className="create-form">

        {/* Form input */}
        <form>
          <label for="serialNumber">Serial Number :</label> <br />
          <input type="text" value={serialValue} onChange={onChangeSerial}/> <br />
          
          <label for="warrantyStart">Warranty Start :</label> <br />
          <input type="date" value={3} onChange={onChangeWarrantyStart} checked={threeYears === 3} onClick={()=> setThreeYears}/> <br />


          <label for="warrantyPeriod">Warranty Period :</label> <br />

          <input type="checkbox" value={3} onChange={onChangeThreeYears}></input> 
          <label for="3"> 3 &nbsp; &nbsp;</label>

          <input type="checkbox" value={5} ></input>
          <label for="5"> 5 &nbsp; &nbsp;</label>

          <input type="checkbox" value={10} ></input> 
          <label for="10"> 10 &nbsp; &nbsp;</label>
          Years <br />

          <input type="checkbox" value={1} ></input> 1 &nbsp; &nbsp;
          <input type="checkbox" value={6} ></input> 6 &nbsp; &nbsp;
          Months <br />

          <button>Submit</button>

          
        </form>
      </div>
    </div>
  )
}
