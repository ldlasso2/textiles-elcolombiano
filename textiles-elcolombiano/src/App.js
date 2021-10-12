import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ventanas from './pages/Ventanas';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br />
        <Switch>
            <Route path="/ventas">
              <Ventanas objeto="ventas" />
            </Route>
            <Router path="/productos">
              <Ventanas objeto="productos" />
            </Router>
            <Router path="/usuarios">
              <Ventanas objeto="usuarios" />
            </Router>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
