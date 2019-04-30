import React, { Component } from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import Inperson from "../components/Inperson";
import M from "materialize-css";
import API from "../utils/API";

class SearchResults extends Component {
constructor(props){
  super(props)
  this.state = {
    address: [],
    latLong: {}

  }


}

  //  display inperson tutors on map.
 
  loadTutors = (map) => {
    var addresses = []
    var lat = []
    var long = []
    var markers = []
    var bounds = new window.google.maps.LatLngBounds();


    API.getInperson()
      .then(res => res.data.map(tutors => addresses.push(tutors.address)))
      .then(() => {
        this.setState({ address: addresses }, 
          function(){
           for (var i = 0; i < this.state.address.length; i++){
             API.getFromGeo(this.state.address[i])
             .then((res=>{
               lat.push(res.data.results[0].geometry.location.lat)
               long.push(res.data.results[0].geometry.location.lng)}))
             
           }
          })
      }).then(setTimeout(function(){
        console.log(addresses)
        console.log(lat)
        console.log(long)

        for (var i = 0; i < addresses.length; i++){
         markers.push([addresses[i],lat[i],long[i]])

         
        }
        console.log(markers)


        for (var i = 0; i < markers.length; i++){
          var position = new window.google.maps.LatLng(markers[i][1], markers[i][2]);
          bounds.extend(position);
         var marker = new window.google.maps.Marker({
           position:position,
           map:map,
           title: markers[i][0]
         })
        }

      },1000))








  }

  loadLatLong = () => {
    console.log(this.state.address, "state address inside load");
  }




  componentDidMount() {
    M.AutoInit()
    this.loadTutors();
    this.loadLatLong();

  }
 

  render() {
    
  
    return (
      <div>
        <div className=" bg-2">
        <div className="row">
          <div className="col s12">
            
            <Map
              id="myMap"
              options={{
                center: { lat: this.props.lat ? this.props.lat : 41.0082, lng: this.props.lng ? this.props.lng : 28.9784 },
                zoom: 10
              }}
              onMapLoad={this.loadTutors}
            ></Map>
          </div>
          </div>
          </div>
          <div className="container">
         <div className="row">
          <div className="col s12">
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