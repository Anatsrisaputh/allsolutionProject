import React from 'react'
import "../../style/home.css";

function Home() {
  return (
    <div className="Home-container">

      <div className="Main-nav">
        <div className="item-home-logo"> logo </div>

        <div className="item-home-home"> logo home </div>

        <div className="item-home-search"> search </div>

        <div className="item-home-cart"> search </div>

        <div className="item-home-profile"> profile </div>
      </div>
      
      <div className="Home-center">
        <div className="home-menu">
        <div className="Home-center-item-Notebook">Notebook</div>
        <div className="Home-center-item-Desktop">Desktop</div>
        <div className="Home-center-item-Server">Server</div>
        <div className="Home-center-item-SSD">SSD</div>
        </div>

        <div className="card-1">card-1</div>

        <div className="card-2">card-2</div>

        <div className="card-3">card-3</div>

        <div className="card-4">card-4</div>
      </div>

      <div className="Home-slide">Slide</div>

      <div className="Home-footer">Footer</div>
    </div>
  )
}

export default Home
