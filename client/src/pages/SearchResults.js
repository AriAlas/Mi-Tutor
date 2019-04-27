import React, { Component } from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import Inperson from "../components/Inperson";
import M from "materialize-css";
import API from "../utils/API";

class SearchResults extends Component {
  //  display inperson tutors on map


  // componentDidMount() {
  //   M.AutoInit()
  // }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Map
                id="myMap"
                options={{
                  center: { lat: this.props.lat ? this.props.lat : 41.0082, lng: this.props.lng ? this.props.lng : 28.9784 },
                  zoom: 8
                }}
                onMapLoad={map => {
                  var circle = new window.google.maps.Circle({
                    center: { lat: this.props.lat ? this.props.lat : 41.0082, lng: this.props.lng ? this.props.lng : 28.9784 },
                    map: map,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    radius: 10000,
                    title: 'Hello Istanbul!'
                  });

                }}
              ></Map>
            </div>
            <div className="col s12 m6 right">
              <div>
                <h6>Tutors in your area:</h6>
                <Inperson></Inperson>
              </div>
              <div className="row">
                <div className="left-align">
                  <Link to="/remote" className="waves-effect waves-light btn">Remote Tutors</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default SearchResults;