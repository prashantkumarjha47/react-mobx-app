import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./modules/login";
import Dashboard from "./modules/dashboard";
import ProtectedRoute from "./hoc/Auth";

const Routes = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={ProtectedRoute(Dashboard)} />
      </Switch>
    </Router>
  </main>
);

export default Routes;
