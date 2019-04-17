import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";

function Home() {
    return (
        <div>
            <h1>Welcome to MiTutor!</h1>
            <SearchBar>
                <SearchButton></SearchButton>
            </SearchBar>
        </div>
    )
}

export default Home;