import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }
    componentDidMount(){
        try {const token = localStorage.userToken;
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }catch(error){}}

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">MiTutor</Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/about">About</Link></li>
                            {/* If Authenticated This <a> tag is Profile */}
                            {/* If NOT authenticated this tag is  LOGIN*/}
                            <li><Link to="/tutors">LogOut</Link></li>
                        </ul>
                    </div>
                </nav>

                {/* This is the profile picture */}
                <section className="section">
                    <div className="container ">
                        <div className="row">
                            <div className="col s4"></div>
                            <div className="col s4 ">
                                <div className="card small">
                                    <div className="card-image">
                                        <img src="https://via.placeholder.com/150" alt="Profile" />
                                       {/* eslint-disable-next-line */}
                                        <a href="#"className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">Edit</i></a>
                                    </div>
                                    <div className="card-content align-center ">
                                        <h4>{this.state.first_name}</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="col s4"></div>

                        </div>
                    </div>
                </section>
                <section className="section">

                    <div class="row">
                        <div className="col s2"></div>
                        <div className="col s8">
                            <div className="card-panel white">
                                <span className="black-text">I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam illum officiis, odio consequatur, minima assumenda exercitationem eaque laboriosam earum at aperiam soluta ullam, sit laudantium voluptatem placeat iste natus.
                                    </span>
                            </div>
                        </div>
                        <div className="col s2"></div>
                    </div>

                </section>
              
                    <div className="row">
                    <div className="col s2"></div>
                    <div className="col s4">
                            <div className="card-panel white">
                                <span className="black-text">I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam illum officiis, odio consequatur, minima assumenda exercitationem eaque laboriosam earum at aperiam soluta ullam, sit laudantium voluptatem placeat iste natus.
                                    </span>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="card-panel white">
                                <span className="black-text">I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam illum officiis, odio consequatur, minima assumenda exercitationem eaque laboriosam earum at aperiam soluta ullam, sit laudantium voluptatem placeat iste natus.
                                </span>
                            </div>
                        </div>
                        <div className="col s2"></div>
                    </div>

              



            </div>
        )
    }
}
export default Profile;