import React from "react";
import { Link } from "react-router-dom"


function Nav() {

  return (
    <div>
      <ul id="dropdown1" className="dropdown-content">
        <li><Link to="/login">Login</Link></li>
        <li className="divider"></li>
        <li><Link to="/register">Register</Link></li>
      </ul>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="nav-wrapper">
      <Link to="/" className="navbar-brand" href="/">
        MiTutor
        </Link>
        <ul class="right hide-on-med-and-down">
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Tutor</a></li>
        </ul>
        </div>
    </nav> */}
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">MiTutor</Link>
        <ul className="right hide-on-med-and-down">
          <li><a href="badges.html">About</a></li>

          <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Tutor<i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
      </nav>
    </div>
    

  )



}



export default Nav;