/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages & Components
import Header from "./components/Header";
import Home from "./pages/Home";

// CSS
import "./app.scss";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Route exact path='/' component={Home} />
    </div>
  );
};

export default App;
