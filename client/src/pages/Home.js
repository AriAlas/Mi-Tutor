import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import Nav from "../components/Nav";


class Home extends Component {
    render() {
    return (
        <div>
        <Nav />
            <div className="container">
                <div className="card">
                <div className="card-content">
                    <span className="card-title">Find tutors near you!</span>               
                    <SearchBar></SearchBar>
                    <SearchButton></SearchButton>
                </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Home;