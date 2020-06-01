import React from 'react'
import "../../style/home.css";

function Home() {
  return (
    <div className="Home-container">

      <div className="Main-nav">
        <div className="item-home-logo"> logo </div>

        <div className="item-home-home"> logo home </div>

        <div className="item-home-search"> search
        <form>
            <input type="text" id="home-search" /><button id="home-search-button">Search</button>
          </form>

        </div>

        <div className="item-home-cart"> search </div>

        <div className="item-home-profile"> profile </div>
      </div>

      <div className="Home-center">
        <div className="home-menu">
          <div className="Home-center-item-notebook">
            <button id="left-menu-button">Notebook</button>
          </div>

          <div className="Home-center-item-desktop">
            <button id="left-menu-button">Desktop</button>
          </div>

          <div className="Home-center-item-server">
            <button id="left-menu-button">Server</button>
          </div>

          <div className="Home-center-item-ssd">
            <button id="left-menu-button">SSD</button>
          </div>
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
