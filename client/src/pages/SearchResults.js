import React, { Component } from "react";
import Nav from "../components/Nav";
import Map from "../components/Map";

class SearchResults extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div>
                <Map
                id="myMap"
                options={{
                  center: { lat: 41.0082, lng: 28.9784 },
                  zoom: 8
                }}
                onMapLoad={map => {
                  var marker = new window.google.maps.Marker({
                    position: { lat: 41.0082, lng: 28.9784 },
                    map: map,
                    title: 'Hello Istanbul!'
                  });
                }}
                ></Map>
                </div>
            </div>
        )
    };
}

export default SearchResults;