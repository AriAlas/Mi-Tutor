import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import Nav from "../components/Nav";
import Map from "../components/Map"


class Home extends Component {
    render() {
    return (
        <div>
            <Nav />
            <h1>Welcome to MiTutor!</h1>
            <SearchBar></SearchBar>
            <SearchButton></SearchButton>
            <Map></Map>
        </div>
    );
    }
}

export default Home;