import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import API from "../../utils/API"

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            bio: "",
            age: "",
            remote: "",
            inperson: "",
            subjects: "",
            profileImage: "",
            address: ""

        }
    }
    componentDidMount() {
        const token = localStorage.userToken;
        const decoded = jwt_decode(token)
        const email = decoded.email;
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email

        })

        API.getOneTutor(email)
            .then(tutor => this.setState({ bio: tutor.data.bio, age: tutor.data.age, remote: tutor.data.remote, inperson: tutor.data.inperson, subjects: tutor.data.subjects, profileImage: tutor.data.profileImage, address: tutor.data.address }))
            .catch(err => console.log(err));


    }


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
                                <div className="card hoverable">
                                    <div className="card-image">
                                        <img src="https://via.placeholder.com/150" />
                                        <span className="card-title black-text">{this.state.first_name}{" "}{this.state.last_name}</span>
                                        <form action="">
                                            <div className="file-field">
                                                <a className="btn-floating halfway-fab waves-effect waves-light  light-blue darken-4"><i className="material-icons">edit</i></a>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4"></div>
                        </div>
                    </div>
                </section>

                {/* This is the BIO Section */}
                <section className="section">
                    <div className="container z-depth-1 hoverable">

                        {/* Modal Trigger Button */}
                        <div className="right-align">
                            <a className="btn-floating waves-effect waves-light light-blue darken-4"><i class="material-icons">edit</i></a>
                        </div>


                        <div className="row">
                            <div className="col s1"></div>
                            <div className="col s10">
                                <div className="card-panel white">
                                    {/* <div className="right-align"><a className="btn-floating waves-effect waves-light light-blue darken-4"><i class="material-icons">edit</i></a></div> */}

                                    <span className="black-text"><strong>About me</strong>

                                    </span>
                                    <div class="divider"></div>
                                    <p>{this.state.bio}</p>
                                </div>
                            </div>
                            <div className="col s1"></div>
                        </div>




                        <div className="row">
                            <div className="col s2"></div>
                            <div className="col s4">
                                <div className="card-panel white">
                                    {/* <div className="right-align"><a className="btn-floating waves-effect waves-light light-blue darken-4"><i class="material-icons">edit</i></a></div> */}
                                    <span className="black-text"><strong>Area of knoledge</strong>

                                    </span>
                                    <div class="divider"></div>
                                    <p>{this.state.subjects}</p>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="card-panel white">
                                    {/* <div className="right-align"><a className="btn-floating waves-effect waves-light light-blue darken-4"><i class="material-icons">edit</i></a></div> */}
                                    <span className="black-text"><strong>Personal Information</strong></span>
                                    <div class="divider"></div>
                                    <p>Name: {this.state.first_name}{" "}{this.state.last_name}</p>
                                    <p>Age: {this.state.age}</p>
                                    <p>Remote sessions: {this.state.remote}</p>
                                    <p>Presental sessions: {this.state.inperson}</p>
                                    <p>Address: {this.state.address}</p>
                                </div>
                            </div>
                            <div className="col s2"></div>
                        </div>



                    </div>
                </section>
            </div>

        )
    }
}
export default Profile;