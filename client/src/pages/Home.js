import React, { Component } from "react";
import {FormInput, LargeForm} from "../components/EditProfile";

//This is a stateful component
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Justin",
            city:"Richmond"
        }
    }

    render() {

        return (
            <div>
                Form input is a statelssComponent that takes props and renders them as definited within its component.
                This is the homepage for <FormInput name={this.state.name}/>
            </div>

        )
    };
};

export default Home;