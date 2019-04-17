import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

function About() {
    return (
        <div>
        <Nav />
            <Hero backgroundImage="https://media.istockphoto.com/photos/we-will-get-to-the-right-answer-eventually-picture-id187244393?k=6&m=187244393&s=612x612&w=0&h=LhszTN3xLMVZdmjkpptTWmohqto2h4-Zm_2HK1qvehw=">
                <h1>About MiTutor</h1>
            </Hero>
            <p>
                Inspired to help.....
            </p>
        </div> 
    );
}

export default About;