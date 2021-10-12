import React from 'react';
import Menu from '../components/Menu';
import Search from '../components/Search';
import FormSales from '../components/FormSales';
import FormProducts from '../components/FormProducts';
import TableSales from '../components/TableSales';
import TableProducts from '../components/TableProducts';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../components/components.css'

function Ventanas(props) {
  return (
    <div className="ventanas-container">
      <Router>
        <div className = "row">
          <div className = "col-4">
            <Menu objetos={props.objeto}/>
          </div>
          <div className = "col-7 mt-1">
          <Switch>
              <Route path = {"/"+ props.objeto + "/buscar"}>
                <Search title = {"Busqueda" + props.objeto} />
              </Route>
              <Route path= {"/"+ props.objeto + "/registrar"}>
                {(props.objeto === "ventas" && <FormSales/>) || (props.objeto === "productos" && <FormProducts />) || (props.objeto === "usuarios" && <FormSales/>)}
              </Route>
              <Route path= {"/"+ props.objeto}>
                {(props.objeto === "ventas" && <TableSales/>) || (props.objeto === "productos" && <TableProducts />) || (props.objeto === "usuarios" && <FormSales/>)}
              </Route>
              
            </Switch>
          </div>
        </div>
      </Router>
      
    </div>
  )
}

export default Ventanas
