import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-danger fixed-top`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-white`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-white`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white`} to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle text-white`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu ">
                <li><Link className="dropdown-item" to="/veg">Veg</Link></li>
                <li><Link className="dropdown-item" to="/non-veg">Non Veg</Link></li>
              </ul>
            </li>
          </ul>
          <div className="form-check form-switch mx-3">
            <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-white` } htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
