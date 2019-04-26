import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import Nav from "../components/Nav";
import API from "../utils/API"
import SearchResults from "./SearchResults";

class Home extends Component {
    constructor(){
        super()
        this.state = {
          search: "",
          lat:"",
          lng:""
        }
    }

    handleInput = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]:value
        }) 
        console.log(this.state)
    }
      
      searchGeo = ()=>{
        console.log("test")
        API.getFromGeo(this.state.search).then((res)=>{
          console.log(res.data.results[0].geometry.location.lat)
          console.log(res.data.results[0].geometry.location.lng)
          this.setState({
            search:"",
            lat: res.data.results[0].geometry.location.lat,
            lng: res.data.results[0].geometry.location.lng,
            showMap: true
          })
          console.log(this.state) // shows nothing in console???
        }).catch(err =>{
          return err
        });
      }

    render() {
      return (
          <div>
          <Nav />
              <div className="container">
                  <div className="card">
                    <div className="card-content">
                        <span className="card-title">Find tutors near you!</span>               
                        <SearchBar handleInput={this.handleInput} value={this.state.search} name="search"></SearchBar>
                        <SearchButton searchGeo={this.searchGeo} value={this.state.lat} ></SearchButton>
                    </div>
                  </div>
              </div>
                {this.state.showMap ? <SearchResults lat={this.state.lat} lng={this.state.lng} /> : 
                <div></div>
                }
          </div>
      );
    }
}

export default Home;