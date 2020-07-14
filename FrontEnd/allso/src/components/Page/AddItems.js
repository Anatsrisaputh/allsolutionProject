import React, { useState } from 'react'
import "../style/additem.css"

function AddItems() {

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

  const onchangeItemName = (e) => {
    setItemName(e.target.value);
  }

  const onchangePrice = (e) => {
    setPrice(e.target.value);
  }

  const onchangeBrand = (e) => {
    setBrand(e.target.value);
  }

  const onchangeQuantity = (e) => {
    setQuantity(e.target.value);
  }

  const confirmAddItem = () => {
    console.log("Pls wait")
  }
  return (
    <div className="add-item-main-container">
      <div className="form-add-item">
      <form >
        <input type="file" className="item-upload"  /> <br/> <br/>
       
        <label>ชื่อสินค้า : </label>
        <input type="text" className="item-name" value={itemName} onChange={onchangeItemName}/> <br/> <br/>

        <label>ราคา : </label>
        <input type="text" className="item-price" value={price} onChange={onchangePrice}/> <br/> <br/>

        <label>ยี่ห้อ : </label>
        <input type="text" className="item-brand" value={brand} onChange={onchangeBrand}/> <br/> <br/>

        <label>จำนวน : </label>
        <input type="text" className="item-quantity" value={quantity} onChange={onchangeQuantity} /> <br/> <br/>

        <button onClick={confirmAddItem}>ยืนยัน</button>
    
      </form>
      </div>
    </div>
  )
}

export default AddItems
