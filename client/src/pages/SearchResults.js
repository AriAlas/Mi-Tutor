import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Map from "../components/Map";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import Inperson from "../components/Inperson";
import M from "materialize-css";

class SearchResults extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: "",
      lat:"",
      lng:""
    }
  }
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
                <Nav></Nav>
                <div className="container">
                  <div className="col s6 pull-s6">
                    {/* <SearchBar handleInput={this.handleInput} value={this.state.search} name="search"/> */}
                    {/* <button onClick={this.searchGeo}>Click Me To Search</button> */}
                  <Map
                  id="myMap"
                  options={{
                    center: { lat: this.state.lat.length ? this.state.lat : 41.0082, lng: this.state.lng.length ? this.state.lng : 28.9784 },
                    zoom: 8
                  }}
                  onMapLoad={map => {
                    var marker = new window.google.maps.Marker({
                      position:  { lat: this.state.lat.length ? this.state.lat : 41.0082, lng: this.state.lng.length ? this.state.lng : 28.9784 },
                      map: map,
                      title: 'Hello Istanbul!'
                    });
                  }}
                  ></Map>
                  </div>
                  <div>
                    <Inperson></Inperson>
                  </div>
                  <Link to="/remote" className="waves-effect waves-light btn">Remote Tutors</Link>
                </div>
            </div>
        )
    };
}

export default SearchResults;