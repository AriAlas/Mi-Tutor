import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";

import Nav from "../components/Nav";


class Home extends Component {
    render() {
    return (
        <div>
            <Nav />
            <h1>Welcome to MiTutor!</h1>
            <SearchBar>
                <SearchButton></SearchButton>
            </SearchBar>
        </div>
    )
}
}

export default Home;