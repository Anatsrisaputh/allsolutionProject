import React from 'react'
import "../style/payment.css"

export default function Payment() {
  return (
    <div className="Payment-main-container">

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

      <div className="payment-body">
        <h3><b>ยอดสุทธิ :</b></h3>
        <form>
          <button id="btn-payment-body">ชำระเงิน</button>
        </form>
      </div>

    </div>
  )
}
