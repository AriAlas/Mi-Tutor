import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Map from "../components/Map";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import Inperson from "../components/Inperson";
import M from "materialize-css";

class SearchResults extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     search: "",
  //     lat:"",
  //     lng:""
  //   }
  // }
    // constructor(){
    //   super()
    //   this.state = {
    //     search: "",
    //     lat:"",
    //     lng:""
    //   }
    // }

    // handleInput = (event) =>{
    //   const value = event.target.value;
    //   const name = event.target.name;
    //   this.setState({
    //     [name]:value
    //   }) 
    // }

    // searchGeo = ()=>{
    //   API.getFromGeo(this.state.search).then((res)=>{
    //     console.log(res.data.results[0].geometry.location.lat)
    //     console.log(res.data.results[0].geometry.location.lng)
    //     this.setState({
    //       search:"",
    //       lat: res.data.results[0].geometry.location.lat,
    //       lng: res.data.results[0].geometry.location.lng
    //     })
    //   }).catch(err =>{
    //     return err
    //   })
    // }
    componentDidMount() {
      M.AutoInit()
    }
    render() {
        return (
            <div>
                {/* <Nav></Nav> */}
                <div className="row">
                  <div className="col s6">
                    {/* <SearchBar handleInput={this.handleInput} value={this.state.search} name="search"/> */}
                    {/* <button onClick={this.searchGeo}>Click Me To Search</button> */}
                    <Map
                      id="myMap"
                      options={{
                        center: { lat: this.props.lat ? this.props.lat : 41.0082, lng: this.props.lng ? this.props.lng : 28.9784 },
                        zoom: 8
                      }}
                      onMapLoad={map => {
                        var circle = new window.google.maps.Circle({
                          center:  { lat: this.props.lat ? this.props.lat : 41.0082, lng: this.props.lng ? this.props.lng : 28.9784 },
                          map: map,
                          strokeColor: '#FF0000',
                          strokeOpacity: 0.8,
                          strokeWeight: 2,
                          fillColor: '#FF0000',
                          fillOpacity: 0.35,
                          radius: 5000,
                          title: 'Hello Istanbul!'
                        });
                      }}
                    ></Map>
                  </div>
                    <div className="col s6 right">
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