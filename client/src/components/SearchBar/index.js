import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      search:""
    }
  }
  render() {
    
    return (
      <div className="row">
        <form className="col s12">
          <div className="row search">
            <div className="input-field col s12">
              <input  type="search" placeholder="Enter Zip Code"id="zipCode"  className="validate"
               name={this.props.name}
               value={this.props.value} 
                onChange={e=> this.props.handleInput(e)}
                 />
                
            </div>
          </div>
        </form>
      </div>
    );
    }
}

export default SearchBar;