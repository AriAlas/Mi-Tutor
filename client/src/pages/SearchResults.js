import React, { Component } from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import Inperson from "../components/Inperson";
import M from "materialize-css";
import API from "../utils/API";

class SearchResults extends Component {
    state = {
      address: "",
      tutorlat: "",
      tutorlng: ""
    }
    
    componentDidMount() {
     this.loadTutors();
      M.AutoInit()
    }

    // searchGeo = ()=>{
    //   console.log("test")
    //    // get latitude and longitude of returned tutor address
    //    API.getFromGeo(this.state.address).then((res)=>{
    //     console.log("tutorlat",res.data.results[0].geometry.location.lat)
    //     console.log("tutorlng",res.data.results[0].geometry.location.lng)
    //     this.setState({
    //       tutorlat: res.data.results[0].geometry.location.lat,
    //       tutorlng: res.data.results[0].geometry.location.lng,
    //       showMap: true,
    //     })
    //     console.log(this.state, "aftersearchgeo")
    //   }).catch(err =>{
    //     return err
    //   });
    // }

    loadTutors = () => {
      API.getInperson().then(res => res.data.map(tutors => this.setState({
        address: tutors.address
      })))
          .then(console.log("thisstateaddress",this.state.address))
          //   API.getFromGeo(tutors.address)
          //   .then((res)=>{
          //   console.log("tutorlat",res.data.results[0].geometry.location.lat)
          //   console.log("tutorlng",res.data.results[0].geometry.location.lng)
          //   this.setState({
          //     tutorlat: res.data.results[0].geometry.location.lat,
          //     tutorlng: res.data.results[0].geometry.location.lng,
          //     showMap: true,
          //   })
          //   console.log(this.state, "aftersearchgeo")
          // }).catch(err =>{
          //   return err
          // }));
        
    }
  


    render() {
        return (
            <div>
                <div className="row">
                  <div className="col s12 m6">
                    <Map
                      id="myMap"
                      options={{
                        center: { lat: this.props.lat ? this.props.lat : 41.0082, lng: this.props.lng ? this.props.lng : 28.9784 },
                        zoom: 8
                      }}
                      onMapLoad={map => {
                        // var circle = new window.google.maps.Circle({
                        //   center:  { lat: this.props.tutorlat, lng: this.props.tutorlng },
                        //   map: map,
                        //   strokeColor: '#FF0000',
                        //   strokeOpacity: 0.8,
                        //   strokeWeight: 2,
                        //   fillColor: '#FF0000',
                        //   fillOpacity: 0.35,
                        //   radius: 10000,
                        //   title: 'Hello Istanbul!'
                        // });
                        var bounds = new window.google.maps.LatLngBounds();

                        var markers = [
                          ['715 Catherine Street, Richmond, VA, USA', 37.551479, -77.446136  ],
                          ['5447 Gaines Mill Circle, Mechanicsville, VA', 37.583500, -77.298760],
         
         
                        ];
                        for (var i = 0; i < markers.length; i++) {
                          var position = new window.google.maps.LatLng(markers[i][1], markers[i][2]);
                          bounds.extend(position);
                          var marker = new window.google.maps.Marker({
                            position: position,
                            map: map,
                            title: markers[i][0]
                          });
                          {/* var latLng = new window.google.maps.LatLng(location1lat);
                            var marker = new window.google.maps.Marker({
                              position: latLng,
                              map: map
                            });  */}
         
         
                        }
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
    )
  };
}

export default SearchResults;