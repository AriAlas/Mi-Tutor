import React, { Component } from "react";
import Nav from "../components/Nav";
import Map from "../components/Map";
import SearchBar from "../components/SearchBar";
import API from "../utils/API"
import SearchButton from "../components/SearchButton";

class SearchResults extends Component {
    constructor(){
      super()
      this.state = {
        search: "",
        lat:"",
        lng:""
      }
    }

    _handleInput = (event) =>{
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]:value
      }) 
    }

    _searchGeo = ()=>{
      API.getFromGeo(this.state.search).then((res)=>{
        console.log(res.data.results[0].geometry.location.lat)
        console.log(res.data.results[0].geometry.location.lng)
        this.setState({
          search:"",
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        })
      }).catch(err =>{
        return err
      })

    }
    render() {
        return (
            <div>
                <Nav></Nav>
                <div>
                  <SearchBar _handleInput={this._handleInput} value={this.state.search} name="search"/>
                  <button onClick={this._searchGeo}>Click Me To Search</button>
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
            </div>
        )
    };
}

export default SearchResults;