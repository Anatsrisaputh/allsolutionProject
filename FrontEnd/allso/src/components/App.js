import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Cart from "./Page/Cart";
import Home from "./Page/Home";
import Login from './Page/Login';
import Payment from "./Page/Payment";
import Profile from "./Page/Profile";
import Warranty from './Page/Warranty';


function App() {
  return (
    <Switch>
    
      <Route exact path="/"> <Home /> </Route>

      <Route exact path='/cart'> <Cart /> </Route>

      <Route exact path="/login"> <Login /> </Route>

      <Route exact path="/payment"> <Payment /> </Route>   

      <Route exact path="/profile"> <Profile /> </Route>

      <Route exact path="/warranty"> <Warranty /> </Route>
        
      
   

    </Switch>
  );
}

export default App;
