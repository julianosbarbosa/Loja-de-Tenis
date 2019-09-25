import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/index";
import Cart from "./pages/cart/index";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cart" component={Cart} />
  </Switch>
);
export default Routes;
