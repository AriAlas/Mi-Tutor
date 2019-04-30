import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav"
import "./style.css"

class Tutors extends Component {

    render() {

        return (
            <div>
            <div className="bg-tutor ">
                <Nav />

                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="section white-text  valign-wrapper">
                    <div className="container tutor-container center-align">
                        <h1>Become a Tutor</h1>
                        <h6>Join us in becoming a HERO for the ones struggling with language</h6>
                        <h6>All you need is an ability to speak English and Spanish, and passion for helping others.</h6>
                        <br />
                        <Link to="/register" className="waves-effect transparent search-button btn-large waves-light btn">Sign Up</Link>
                    </div>
                </div>
                </div>
                <br/>
                <br/>
              
               

                <div className="section steps-container   valign-wrapper">
                    <div className=" center-align margin">
                        <div className="row ">
                            <div className="col s12">
                                <h1 className="center-align">Steps to become a tutor:</h1>
                            </div>
                        </div>
                        <div className="row center-align">
                            <div className="steps col s6 m3">
                                <h3>Sign Up</h3>
                                <p>Your profile is essentially your own website to attract new students.
                                    Write about your education, experience, and explain how you teach and why you love it.
                                    Be sure your profile image is inviting.</p>
                            </div>
                            <div className="steps col s6 m3">
                                <h3>Receive Emails</h3>
                                <p>With a profile set up, you'll start getting tutoring requests email, make sure to
                                    also check the spam folder. In your email you will find the student information
                                    including their name, email address and any comments regarding their needs.
                                    
                                     </p>
                            </div>
                            <div className="steps col s6 m3">
                                <h3>Get in touch</h3>
                                <p>Once you receive their information thru email, you can start communication to
                                set up a convenient meeting place and time.</p>
                            </div>
                            <div className="steps col s6 m3">
                                <h3>Start tutoring</h3>
                                <p>Make sure to motivate and inspire. The students contacting you will
                                    need you more than you think.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 center-align">
                            <Link to="/register" className=" blue lighten-1  waves-effect search-button btn-large waves-light btn">Sign Up</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Tutors;