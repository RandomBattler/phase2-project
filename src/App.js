import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import NavBar from "./NavBar";
import Home from './Home';
import Profile from "./profile";

function App() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3001/portfolio")
      .then((r) => r.json())
      .then((s) => setPortfolio(s));
  }, []);

  return (
    <>

      <NavBar />
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          Hello from About
        </Route>
        <Route path="/profile">
          <Profile portfolio={portfolio} />
        </Route>
      </div>
    </>
  );
}

export default App;
