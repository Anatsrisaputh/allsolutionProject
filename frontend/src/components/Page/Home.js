import React,  { useState  } from 'react';
import Route, { Link } from 'react-router-dom'
import "../style/home.css";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import notebook from "../web-img/home/notebook.webp"
import desktop from "../web-img/home/desktop.webp"
import hardware from '../web-img/home/hardware.webp'
import printer from "../web-img/home/printer.webp"
import network from "../web-img/home/network.webp"



import { Card, AutoComplete } from 'antd';
import { Button  } from 'antd';
import { red } from '@material-ui/core/colors';




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

        <div className="item-home-home" > <a ><Link to="/"> <HomeRoundedIcon fontSize={"large"}/> </Link> </a> </div>

        <div className="item-home-search"> 
          <form>
            <input type="text" id="home-search" /><button id="home-search-button"> ค้นหา</button>
          </form>
        </div>

        <div className="item-home-cart" > <a ><Link to="/cart"> <ShoppingCartOutlinedIcon fontSize={"large"}/>  </Link> </a> </div>

        <div className="item-home-profile" > <a><Link to="/profile"><AccountCircleRoundedIcon fontSize={"large"}/> </Link></a></div>
      </div>
      
        {/* ----------------Left Menu --------------- */}
      <div className="Home-center">

      <div className="card-0">
        <Card
              hoverable
              style={{width: AutoComplete}}
              cover={<img alt="Card-0-notebook" src={notebook} />}
            >
              <Meta title="Notebook" description="14 inch/ AMD Ryzen 7 " />
              <Meta description=" 3700U" />
              <Meta description=" 12GB DDR4 / 1TB SSD" /> 
              <Meta description="Integrated Graphics" />
              <Meta description="win 10 home" />
              <Meta title="Price: 23,000 THB." /> 
              <br />
              <Button type="primary" id="btn-add-cart-0">Add to cart</Button>
            </Card>
        </div>

        {/* <div className="home-menu">
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

        </div> */}


        {/*---------- Card ----------*/}
        <div className="card-1">
        <Card
              id={"card-1"}
              hoverable
              style={{width: AutoComplete}}
              cover={<img alt="Card-1-desktop" src={desktop} />}
            >
              <Meta title="Desktop / AIO" description=" AMD Ryzen 5 " />
              <Meta description="3400G" />
              <Meta description="4GB DDR4 / 1TB" />  
              <Meta description="Integrated Graphics" />
              <Meta description="win 10 home" />
              <Meta title="Price: 13,500 THB." /> 
              <br />
              <Button type="primary" id="btn-add-cart-1">Add to cart</Button>
            </Card>
        </div>

        <div className="card-2">
          <Card
              hoverable
              style={{width: AutoComplete}}
              cover={<img alt="hardware" src={hardware} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
              <p>test</p>
              <Button type="primary" id="btn-add-cart-2">Add to cart</Button>
            </Card>
        </div>
          
        <div className="card-3">
          <Card
              hoverable
              style={{width: AutoComplete}}
              cover={<img alt="printer" src={printer} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
              <Meta description="www.instagram.com"/>
              <Button type="primary" id="btn-add-cart-4">Add to cart</Button>
              
          </Card> 
        </div>

        <div className="card-4">
          <Card
              hoverable
              style={{width: AutoComplete}}
              cover={<img alt="network" src={network} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
              <p>test</p>
              <Button type="primary" id="btn-add-cart-3">Add to cart</Button>
            </Card>
        </div>
      </div>

        {/*---------- Slide ----------*/}
      <div className="Home-slide">Slide</div>

        {/*---------- Footer ----------*/}
      <div className="Home-footer">Footer
      
      </div>
    </div>
  )
}

export default Home
