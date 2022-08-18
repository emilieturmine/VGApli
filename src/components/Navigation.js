import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="Navigation mt-0">
      <nav
        id="navbar-gen"
        className="navbar navbar-expand-lg navbar-light" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 " id="ulgeneral">
            <li className="nav-item active  ">
              <Link style={{ color: 'white' }} to="/">Acceuil</Link>
            </li>
            <li className="nav-item ">
              <Link style={{ color: 'white' }} to="/Categories">Catalogue</Link>
            </li>
            <li className="nav-item active  ">
              <Link style={{ color: 'white' }} to="/Marques">Marques</Link>
            </li>
            <li className="nav-item active  ">
              <Link style={{ color: 'white' }} to="/Actus">Actus</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export { Navigation }
