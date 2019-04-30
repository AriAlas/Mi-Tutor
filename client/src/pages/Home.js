import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import Nav from "../components/Nav";
import API from "../utils/API"
import SearchResults from "./SearchResults";
import M from "materialize-css";

class Home extends Component {
    constructor(){
        super()
        this.state = {
          search: "",
          lat:"",
          lng:"",
          tutors: [],
          tutorlat: "",
          tutorlng: "",
        }
    }

    handleInput = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]:value
        }) 
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
            showMap: true,
            // tutors: res.data.results[0].address
          })
          console.log(this.state) 
        }).catch(err =>{
          return err
        });
      }
      //   // get latitude and longitude of returned tutor address
      //   API.getFromGeo(this.state.tutor).then((res)=>{
      //     console.log(res.data.results[0].geometry.location.lat)
      //     console.log(res.data.results[0].geometry.location.lng)
      //     this.setState({
      //       tutorlat: res.data.results[0].geometry.location.lat,
      //       tutorlng: res.data.results[0].geometry.location.lng,
      //       showMap: true,
      //     })
      //     console.log(this.state)
      //   }).catch(err =>{
      //     return err
      //   });
      // }
    
      loadTutors = () => {
        API.getInperson().then(res => res.data.map(tutors => this.state.tutors.push(tutors.address)))
            .catch(err => console.log(err))
            
      }
      
      componentDidMount = () => {

        this.loadTutors();
        console.log(this.state, "on home page load")
        M.AutoInit();
      }

    render() {
      return (
        <div className="div">
          <div className="home-wrapper overlay">
          <Nav />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
              <div className="container center-align ">
                  <div className="card vcenter indigo darken-4 opacity round-corners ">
                    <div className="card-content ">
                        <span className="card-title white-text">Find tutors near you!</span>               
                        <SearchBar handleInput={this.handleInput} value={this.state.search} name="search"></SearchBar>
                        <SearchButton searchGeo={this.searchGeo} value={this.state.lat} ></SearchButton>
                    </div>
                  </div>
              </div>
              
               
          </div>
          <div className="map-wrapper scrollspy" id="map">
          {this.state.showMap ? <SearchResults tutors={this.state.tutors} lat={this.state.lat} lng={this.state.lng} tutorlat={this.state.tutorlat} tutorlng={this.state.tutorlng} /> : 
                <div></div>
                }
          </div>
         
          </div>
      );
    }
}

export default Home;