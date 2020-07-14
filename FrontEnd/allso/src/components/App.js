import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Cart from "./Page/Cart";
import Home from "./Page/Home";
import Login from './Page/Login';
import Payment from "./Page/Payment";
import Profile from "./Page/Profile";
import Warranty from './Page/Warranty';
import Register from "./Page/Register";
import CheckWarranty from './Page/CheckWarranty';
import AddWarranty from './Page/AddWarranty';
import ConfirmCart from "./Page/ConfirmCart";
import AddItems from './Page/AddItems';


function App() {
  return (
    <Switch>
    
      <Route exact path="/"> <Home /> </Route>
      <Route exact path='/cart'> <Cart /> </Route>
      <Route exact path="/login"> <Login /> </Route>
      <Route exact path="/payment"> <Payment /> </Route>   
      <Route exact path="/profile"> <Profile /> </Route>
      <Route exact path="/warranty"> <Warranty /> </Route>
      <Route exact path="/register"> <Register /> </Route>
      <Route exact path="/checkwarranty"> <CheckWarranty /> </Route>
      <Route exact path="/add-warranty"> <AddWarranty /> </Route>
      <Route exact path="/confirm-cart"> <ConfirmCart /> </Route>
      <Route exact path="/add-item"> <AddItems /></Route>
   

    </Switch>
  );
}

export default App;
