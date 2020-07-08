import React from 'react'
import "../../style/createitems.css"

export default function AddWarranty() {
  return (
    <div className="create-items-main">
      <div className="create-form">

        {/* Form input */}
        <form>
          <label for="serialNumber">Serial Number :</label> <br />
          <input type="text" /> <br />
          
          <label for="warrantyStart">Warranty Start :</label> <br />
          <input type="date" /> <br />

          <label for="warrantyPeriod">Warranty Period :</label> <br />
          <input type="checkbox"></input> 3 &nbsp; &nbsp;
          <input type="checkbox"></input> 5 &nbsp; &nbsp;
          <input type="checkbox"></input> 10 &nbsp; &nbsp;
          Years <br />

          <input type="checkbox" ></input> 3 &nbsp; &nbsp;
          <input type="checkbox"></input> 5 &nbsp; &nbsp;
          <input type="checkbox"></input> 10 &nbsp; &nbsp;
          Months <br />
          
          <button>Submit</button>

          
        </form>
      </div>
    </div>
  )
}
