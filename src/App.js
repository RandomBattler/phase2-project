import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      <Route path="/">
        <div>
          Hello Home!!
        </div>
      </Route>
      <Route path="/about">
        Hello from About
      </Route>
      <Route path="/login">
        Login here
      </Route>
    </>
  );
}

export default App;
