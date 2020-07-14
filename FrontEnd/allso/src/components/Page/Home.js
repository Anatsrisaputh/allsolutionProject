import React,  { useState  } from 'react';
import Route, { Link } from 'react-router-dom'
import "../style/home.css";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';


import { Card, AutoComplete } from 'antd';




function Home() {
  const [card_1, setCard_1] = useState([]);
  const [card_2, setCard_2] = useState([]);
  const [card_3, setCard_3] = useState([]);
  const [card_4, setCard_4] = useState([]);

  const { Meta } = Card;

  const Card2 = require('../web-img/Cart.PNG')

  const linkToHome = ()=> {
    console.log("Link to Home page")
  }


  return (
    <div className="Home-container">
      
      {/* Main Nav */}
      <div className="Main-nav">
        <div className="item-home-logo"> logo 
    
        </div>

        <div className="item-home-home" onClick={linkToHome}> <HomeRoundedIcon fontSize={"large"}/> </div>

        <div className="item-home-search"> search
        <form>
            <input type="text" id="home-search" />
            <button id="home-search-button"> search</button>
          </form>

        </div>

        <div className="item-home-cart" onClick={()=>{console.log("Hello")}}> <ShoppingCartOutlinedIcon fontSize={"large"}/> </div>

        <div className="item-home-profile" onClick={()=>{console.log("Profile")}}><AccountCircleRoundedIcon fontSize={"large"}/> </div>
      </div>
      
        {/* ----------------Left Menu --------------- */}
      <div className="Home-center">
        <div className="home-menu">
          <div className="Home-center-item-notebook">
            <button id="left-menu-button" onClick={console.log("btn-Notebook")}>Notebook</button>
          </div>

          <div className="Home-center-item-desktop">
            <button id="left-menu-button" onClick={console.log("btn-Desktop")}>Desktop</button>
          </div>

          <div className="Home-center-item-server">
            <button id="left-menu-button" onClick={console.log("btn-Server")}>Server</button>
          </div>

          <div className="Home-center-item-ssd">
            <button id="left-menu-button" onClick={console.log("btn-SSD")}>SSD</button>
          </div>

        </div>

        {/*---------- Card ----------*/}
        <div className="card-1">card-1
          <Card
            hoverable
            style={{width: AutoComplete}}
            cover={<img alt="Card-1" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <p>test</p>
          </Card>
        </div>

        <div className="card-2">card-2</div>
          
        <div className="card-3">card-3 
          <img alt="Card-2" src={Card2} id="card2-img"/>  
        </div>

        <div className="card-4">card-4</div>
      </div>

        {/*---------- Slide ----------*/}
      <div className="Home-slide">Slide</div>

        {/*---------- Footer ----------*/}
      <div className="Home-footer">Footer</div>
    </div>
  )
}

export default Home
