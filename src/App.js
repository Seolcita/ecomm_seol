/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages & Components
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

// CSS
import "./app.scss";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </div>
  );
};

export default App;
