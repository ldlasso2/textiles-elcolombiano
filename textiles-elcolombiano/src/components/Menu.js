import React from 'react'
import {Link} from 'react-router-dom'
import './components.css'
function Menu(props) {
  return (
    <div class="list-group" className="menu-container">
      <ul>
        <li class="list-group-item list-group-item-action">
          <Link to= {"/"+props.objetos} className="link">
            Lista de {props.objetos}
          </Link>
        </li>
        <li class="list-group-item list-group-item-action">
          <Link to= {"/"+ props.objetos + "/registrar"} className="link">
            Registrar {props.objetos}
          </Link>
        </li>

        <li class="list-group-item list-group-item-action">
          <Link to= {"/"+ props.objetos + '/buscar'} className="link">
            Buscar {props.objetos}
          </Link>
        </li>
      </ul>
    </div>

  )
}

export default Menu
