import React from "react";


class SearchButton extends React.Component {

  render() {
  return(
  <div className="center-align">
    <a onClick={this.props.searchGeo} 
    className="search-button indigo darken-4 opacity btn-large" 
    id="clickSearch" 
    name="action"
    href="#map">
    
      Search
    </a>
    
    </div>
  );
  }
}

export default SearchButton;