import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

function About() {
    return (
        <div>
            <div className="about-wrapper ">
            <Nav />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                <div className="container white-text indigo darken-4 opacity round-corners padding">
                <h1 className="center-align">About Us</h1>                  
                <h5 className="center-align">MiTutor was created to fill a need in Spanish-speaking communities across the US who may struggle with their education due to language barriers. We aim to provide quality and affordable tutoring services to families who may not be able to access additional learning support otherwise.</h5>
                </div>
            </div>
        </div> 
    );
}

export default About;