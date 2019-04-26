import React from "react";
import { Link } from "react-router-dom";



class SearchButton extends React.Component {

  render() {
  return(
    // <Link to="/search-results">
    <button onClick={this.props.searchGeo} className="btn waves-effect waves-light" type="submit" id="clickSearch" name="action">search
      <i className="material-icons right">search</i>
    </button>
    // </Link>
  );
  }
}


export default SearchButton;