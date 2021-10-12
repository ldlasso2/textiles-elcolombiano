import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ventanas from './pages/Ventanas';
import { Login } from './components/Login';

import firebase from '@firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAP_e0DeXPUpsjf32nRE8n_4hcvtchefkg",
  authDomain: "labauth-13910.firebaseapp.com",
  projectId: "labauth-13910",
  storageBucket: "labauth-13910.appspot.com",
  messagingSenderId: "834669163123",
  appId: "1:834669163123:web:cf9683d36d600404ab3006",
  measurementId: "G-LW6G134T48"
}

if(!firebase.apps[0]){
  firebase.initializeApp(firebaseConfig);
}

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
            <Router path="/">
              <Login />
            </Router>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
