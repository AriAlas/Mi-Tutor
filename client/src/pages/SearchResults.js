import React, { Component } from "react";
import Nav from "../components/Nav";
import Map from "../components/Map";

class SearchResults extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Map></Map>
            </div>
        )
    };
}

export default SearchResults;