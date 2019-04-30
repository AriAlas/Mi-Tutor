import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

function About() {
    return (
        <div>
        
            <Hero backgroundImage="https://media.istockphoto.com/photos/we-will-get-to-the-right-answer-eventually-picture-id187244393?k=6&m=187244393&s=612x612&w=0&h=LhszTN3xLMVZdmjkpptTWmohqto2h4-Zm_2HK1qvehw=">
            <Nav />
           
                <div className="container ">
                <h1 className="center-align">About Us</h1>                  
                <h5 className="center-align">MiTutor was created to fill a need in Spanish-speaking communities across the US who may struggle with their education due to language barriers. We aim to provide quality and affordable tutoring services to families who may not be able to access additional learning support otherwise.</h5>


                </div>
                
            </Hero>
        </div> 
    );
}

export default About;