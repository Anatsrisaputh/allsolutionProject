import React from 'react'
import "../style/cart.css"

export default function Cart() {
  return (
    <div className="Cart-main-container">

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

      <div className="cart-element">

        {/*---------- cart-list ----------*/}
        <div className="cart-list">
          <h2><b>รายการสินค้า</b></h2>
        </div>

        {/*---------- cart-summary ----------*/}
        <div className="cart-summary">
          <div>
          <h2><b>ยอดสุทธิ</b></h2>
          <form>
            <button id="btn-confirm-cart">ดำเนินการต่อ</button>
          </form>
          </div>
        </div>

      </div>
      
    </div>
  )
}
