import React from 'react'
import Cartwidget from '../Cartwidget'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark align">
  <div className="container-fluid">
    <a className="navbar-brand " href="#">Sunrise Sneakers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text" href="#">Stock</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text" href="#">Contacto</a>
        </li>
      </ul>
    </div>
    <div className='carritoLogo'>
          <Cartwidget/>
        </div>
        <div className='align2'>
      <p className='numero'>2</p>
    </div>
  </div>
</nav>
  )
}

export default Navbar