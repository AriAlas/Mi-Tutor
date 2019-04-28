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
          tutor: [],
          tutorlat: [],
          tutorlng: []
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
        // get latitude and longitude of user input
        API.getFromGeo(this.state.search).then((res)=>{
          console.log(res.data.results[0].geometry.location.lat)
          console.log(res.data.results[0].geometry.location.lng)
          this.setState({
            search:"",
            lat: res.data.results[0].geometry.location.lat,
            lng: res.data.results[0].geometry.location.lng,
            showMap: true,
          })
          console.log(this.state)
        }).catch(err =>{
          return err
        });
        // get latitude and longitude of returned tutor address
        API.getFromGeo(this.state.tutor).then((res)=>{
          console.log(res.data.results[0].geometry.location.lat)
          console.log(res.data.results[0].geometry.location.lng)
          this.setState({
            tutorlat: res.data.results[0].geometry.location.lat,
            tutorlng: res.data.results[0].geometry.location.lng,
          })
          console.log(this.state)
        }).catch(err =>{
          return err
        });
      }
      // get tutor addresses from database
      loadTutors = () => {
        API.getInperson().then(res => res.data.map(tutor =>{
          console.log(tutor.address)
          return (
          this.setState({
            tutor: tutor.address
          })
          )
          console.log(this.setState)
        })).catch(err =>{ 
          return err 
        } 
        )};
        // older *
        // loadTutors = () => {
        //   API.getInperson().then(res => res.data.map(tutor =>{
        //     console.log(tutor.address)
        //     return (
        //     this.setState({
        //       tutor: tutor.address
        //     })
        //     )
        //     console.log(this.setState)
        //   })).catch(err =>{ 
        //     return err 
        //   } 
        //   )};
      //  *
      componentDidMount = () => {
        this.loadTutors();
        console.log(this.state)
        M.AutoInit();
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
                {this.state.showMap ? <SearchResults lat={this.state.lat} lng={this.state.lng} tutorlat={this.state.tutorlat} tutorlng={this.state.tutorlng} /> : 
                <div></div>
                }
          </div>
      );
    }
}

export default Home;