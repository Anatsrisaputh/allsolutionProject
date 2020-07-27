import React from 'react'
import configRoutes from "../../config/routes";
import { Switch, Redirect, Route } from 'react-router-dom';


function privateRoutes(props) {
  const role = props.role || "guest";

  const allowedRoutes = configRoutes[role].allowedRoutes;
  const redirectRoute = configRoutes[role].redirectRoutes;

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
          <Redirect to={props.redirectRoute} />
      </Switch>
    </div>
  )
}

export default privateRoutes
