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
          <div className="row">
            <div className="input-field col s3">
              <input placeholder="Zip Code" id="zipCode" type="input" className="validate"
               name={this.props.name}
               value={this.props.value} 
                onChange={e=> this.props.handleInput(e)}
                 ></input>
            </div>
          </div>
        </form>
      </div>
    );
    }
}

export default SearchBar;