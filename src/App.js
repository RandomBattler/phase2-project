import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import NavBar from "./NavBar";

function App() {
  return (
    <>

      <NavBar />
      <Route path="/about">
        Hello from About
      </Route>
      <Route path="/profile">
        Login here
      </Route>
      <Route exact path="/">
        <div>
          Hello Home!!
        </div>
      </Route>
    </>
  );
}

export default App;
