import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import NavBar from "./NavBar";
import Home from './Home';
import Profile from "./profile";

function App() {

  const [prices, setPrices] = useState(null);
  function updatePrices() {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Clitecoin%2Csolana%2Cdogecoin&vs_currencies=usd")
      .then((r) => r.json())
      .then((c) => { setPrices(c); });

  }

  useEffect(() => {
    updatePrices();
  }, []);

  useEffect(() => {

    setInterval(() => {
      updatePrices();
    }, 60000);//update the price every minute

  }, []);



  return (
    <div>

      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile prices={prices} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
