import React from "react";

class SearchButton extends React.Component {

  render() {
  return(
    <button onClick={this.props.searchGeo} className="btn waves-light" type="submit" id="clickSearch" name="action">search
      <i className="material-icons right">search</i>
    </button>
  );
  }
}

export default SearchButton;