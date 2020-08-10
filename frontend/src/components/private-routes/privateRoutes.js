import React, {useState, useEffect} from 'react'
import configRoutes from "../../config/roles";
import { Switch, Redirect, Route } from 'react-router-dom';


function PrivateRoutes(props) {
  const role = props.role || "guest";

  const allowedRoutes = configRoutes[role].route;
  const redirectRoute = configRoutes[role].route;
  console.log(allowedRoutes)

  return (
    
    <div>
      <Switch>
        {allowedRoutes.map(route => (
          <Route
          exact path={route.url}
          key={route.url}
          >
          <route.component setRole={props.setRole} />
          
          </Route >
        
        ))}
          <Redirect to={redirectRoute} />
      </Switch>
    </div>
  )
}

export default PrivateRoutes;
