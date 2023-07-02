import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import NavBar from "./NavBar";
import Home from './Home';
import Profile from "./profile";

function App() {
 

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
