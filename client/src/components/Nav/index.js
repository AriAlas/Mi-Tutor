import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./style.css"

class Nav extends React.Component {
  componentDidMount() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, M.options);
   }

  logOut(e){
    e.preventDefault();
    localStorage.removeItem("userToken");
    window.location.href="/";
  }
 

  render () {
  // this is the navbar when the user is not logged in
    const loginLink = (
        <li><Link to="/login">Login</Link></li>
    )
  // this is the nav bar when the user is logged in
    const userLink = (
        <li><a href="" onClick={this.logOut}>LogOut</a></li>
    )
    

  return (
    <div>
    <nav className="teal lighten-2 main-nav">
      <div className="nav-wrapper">
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <Link to="/" className="brand-logo">MiTutor</Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tutors">Tutors</Link></li>
          {localStorage.userToken ? userLink : loginLink}
          </ul>
        </div>
       
        
      
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/tutors">Tutors</Link></li>
        {localStorage.userToken ? userLink : loginLink}
      </ul>
    </div>
  )
}
}

export default Nav;