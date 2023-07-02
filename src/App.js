import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import NavBar from "./NavBar";
import Home from './Home';
import Profile from "./profile";

function App() {

  let cValue = [];
  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Clitecoin%2Csolana%2Cdogecoin&vs_currencies=usd")
            .then((r) => r.json())
            .then((s) => {
              cValue = s;
              console.log(cValue);
            });
 

  return (
    <div>

      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          Hello from About
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
