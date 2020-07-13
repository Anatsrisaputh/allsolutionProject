import React from 'react'
import "../style/profile.css" 

export default function Profile() {
  return (
    <div className="Main-Profile-Container">

      {/* -------Main Nav --------*/}
      <div className="Main-nav">

        <div className="item-home-logo"> logo 
    
        </div>

        <div className="item-home-home"> logo home 89 </div>

        <div className="item-home-search"> search
        <form>
            <input type="text" id="home-search" /><button id="home-search-button">Search</button>
          </form>

        </div>

        <div className="item-home-cart"> search </div>

        <div className="item-home-profile"> profile </div>
      </div>

      {/* ----------------Center --------------- */}
      <div className="profile-center">

        <div className="profile-menu">
        menu
        <form>
          <button id="btn-name">Yourname</button> <br />
          <button id="btn-order-list"> รายการที่ซื้อ</button> <br />
          <button id="btn-profile-logout">Log Out</button> <br />
        </form>
        </div>

        <div className="profile-personal-data">
        <h3><b>ข้อมูลส่วนตัว</b></h3> 
        <p>เลขที่ลูกค้า :  </p> 
        <p>ชื่อลูกค้า :  </p> 
        <p>Email : </p>
        <p>เบอร์มือถือ :  </p>
        </div>
      </div>
      {/* ------------------------------- */}

      {/*------------bottom-------------*/}
      <div className="profile-bottom">

        <div className="profile-shiping-address">
          <h3><b>ที่อยู่ในการจัดส่งสินค้า</b></h3>
          <p>บ้านเลขที่ :  </p>
          <p>ตำบล/แขวง :  </p>
          <p>อำเภอ/เขต :  </p>
          <p>จังหวัด :  </p>
          <p>รหัสไปรษณีย์ : </p>
        </div>

        <div className="profile-tax-invoice">
        <h3><b>ข้อมูลใบกำกับภาษี</b></h3>
        
        </div>

      </div>

    </div>
  )
}
