import React from "react";
import { NavLink } from "react-router-dom";


/* define the NavBar component */
function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li key={0}>
      <NavLink to="/">
        Home
      </NavLink></li>
        <li key={2}>
      <NavLink to="/profile">
        Buy/Sell
      </NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;
