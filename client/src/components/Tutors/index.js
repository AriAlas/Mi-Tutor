import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav"

class Tutors extends Component {
    
    render() {

        return (
            <div>
                <Nav />
                <div className="section">
                    <div className="container">
                    <h5>Want to become a Tutor?</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eius architecto iste quis corporis soluta saepe in id tenetur nostrum!</p>
                    <a className="waves-effect waves-light btn">SignUp</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Tutors;