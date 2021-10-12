import React from 'react'
import {Link} from 'react-router-dom'
import './components.css'
function Navbar() {
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/ventas" className="link">
                <a class="nav-link" href="#!">Ventas</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/productos" className="link">
                <a class="nav-link" href="#!">Productos</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/usuarios" className="link">
                <a class="nav-link" href="#!">Usuarios</a>
              </Link>
            </li>
          </ul>
          
        </div>
        <form class="form-inline ">
            <button className="btn btn-outline-info" type="submit">Cerrar sesión</button>
        </form>
      </nav>
      
    </div>

  )
}

export default Navbar
