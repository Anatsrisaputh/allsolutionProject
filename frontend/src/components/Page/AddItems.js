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
    const file = e.target.files[0] // เก็บไว้ setState ลงใน file
    const reader = new FileReader(); // เรียก Class FileReader เพื่อแปลง file image ที่รับเข้ามา
    reader.onloadend = () => { // เป็น eventของFileReaderเมื่อโหลดภาพเสร็จ
      setFile(file) // ทำการ setState
      setImagePreviewUrl(reader.result) //เหมือนด้านบน
    }
    reader.readAsDataURL(file) // เป็นส่วนของการแสดงรูป ไม่ค่อยแน่ใจครับ 
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


  const confirmAddItem = async value => {
    const body = {
      name: value.name,
      price: value.price,
      brand: value.brand,
      quantity: value.quantity
    }

    const formData = new FormData() //สร้างตัวแปร มารับ Class FormData
    formData.append('file', file) //arg แรกนั้นเป็น ชื่อ Key ส่วน arg2 เป็น Value

    await axios.post("/item/add", body, file);
    alert("Add Item success")

  }

  return (
    <div className="add-item-main-container">
      <div className="form-add-item">
        <form >
          {/* <p > {imagePreviewUrl} </p> */}
          <input type="file" className="item-upload" onChange={handleUploadImage} /> <br /> <br />

          <label>ชื่อสินค้า : </label>
          <input type="text" className="item-name" value={name} onChange={onchangeName} /> <br /> <br />

          <label>ราคา : </label>
          <input type="text" className="item-price" value={price} onChange={onchangePrice} /> <br /> <br />

          <label>ยี่ห้อ : </label>
          <input type="text" className="item-brand" value={brand} onChange={onchangeBrand} /> <br /> <br />

          <label>จำนวน : </label>
          <input type="text" className="item-quantity" value={quantity} onChange={onchangeQuantity} /> <br /> <br />

          <button onClick={confirmAddItem}>ยืนยัน</button>

        </form>
      </div>
    </div>
  )
}

export default AddItems
