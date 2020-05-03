import React from 'react';
import './App.css';
import { Switch, Route } from 'react router dom';
import Cart from './Page/cart';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
