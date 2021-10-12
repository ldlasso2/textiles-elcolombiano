import React from 'react'
import Menu from '../components/Menu'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Ventanas(props) {
  return (
    <div className="ventanas-container">
      <Router>
        <div class = "row">
          <div class = "col-4">
            <Menu objetos={props.objeto}/>
          </div>
          <div class = "col-8">

          </div>
        </div>
      </Router>
      
    </div>
  )
}

export default Ventanas
