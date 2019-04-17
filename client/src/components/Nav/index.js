import React from "react";
import { Link } from "react-router-dom"


class Nav extends React.Component {
  logOut(e){
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
  }
render () {
// this is the navbar when the user is not logged in
  const loginLink = (

          <li><Link to="/login">Login</Link></li>
      
 
  )
// this is the nav bar when the user is logged in
    const userLink = (
     
          <li><a href="" onClick={this.logOut.bind(this)}>LogOut</a></li>
        
    )
  return (
    <div>
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">MiTutor</Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tutors">Tutors</Link></li>
          {localStorage.usertoken ? userLink : loginLink}
          </ul>
      </div>
      </nav>
    </div>

  )



}
}




export default Nav;