import React, { useState } from 'react'
import "../style/additem.css"
import axios from '../../config/axios';

function AddItems() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  // const [image, setImage] = useState("");

  const [file, setFile] = useState({}) // ใช้เพื่อส่งไปที่ API
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null) //ใช้เพื่อภาพ Preview

  // Upload picture

  const handleUploadImage = (e) => {
   setFile(e.target.files[0])  // เก็บไว้ setState ลงใน file
   setImagePreviewUrl(URL.createObjectURL(e.target.files[0]));
   
  }

  const onchangeName = (e) => {
    setName(e.target.value);
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


  const confirmAddItem = async (e)  => {
    e.preventDefault();
  
    const formData = new FormData() //สร้างตัวแปร มารับ Class FormData
    formData.append('pic', file) //arg แรกนั้นเป็น ชื่อ Key ส่วน arg2 เป็น Value
    formData.append('name', name);
    formData.append('price', price);
    formData.append('brand', brand);
    formData.append('quantity', quantity);
    await axios.post("/item/add", formData);
    alert("Add Item success");
  }

  return (
    <div className="add-item-main-container">
      <div className="form-add-item">
        <form onSubmit={confirmAddItem}>
          {/* <p > {imagePreviewUrl} </p> */}
          <div className="previewImage" > <img src={imagePreviewUrl}></img> </div>
          <input type="file" className="item-upload" onChange={handleUploadImage} /> <br /> <br />

          <label>ชื่อสินค้า : </label>
          <input type="text" className="item-name" value={name} onChange={onchangeName} /> <br /> <br />

          <label>ราคา : </label>
          <input type="text" className="item-price" value={price} onChange={onchangePrice} /> <br /> <br />

          <label>ยี่ห้อ : </label>
          <input type="text" className="item-brand" value={brand} onChange={onchangeBrand} /> <br /> <br />

          <label>จำนวน : </label>
          <input type="text" className="item-quantity" value={quantity} onChange={onchangeQuantity} /> <br /> <br />

          <button>ยืนยัน</button>

        </form>
      </div>
    </div>
  )
}

export default AddItems
