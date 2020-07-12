import React from 'react'

export default function ConfirmCart() {
  return (
    <div className="Confirm-cart-main-container">

      {/* Main Nav */}
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

      {/* ----- Element confirm cart ----- */}
      <div className="element-confirm-cart">
      <div className="confirm-cart-shiping-address">
          <h3><b>ที่อยู่ในการจัดส่งสินค้า</b></h3>
          <p>บ้านเลขที่ :  </p>
          <p>ตำบล/แขวง :  </p>
          <p>อำเภอ/เขต :  </p>
          <p>จังหวัด :  </p>
          <p>รหัสไปรษณีย์ : </p>
        </div>
      </div>
      
    </div>
  )
}
