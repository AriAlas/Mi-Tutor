import React from "react";

function SearchButton(props) {
  return(
    <a className="waves-effect waves-light btn-small" type="submit" id="clickSearch" onClick={props.handleFormSubmit}><i className="material-icons right">search</i>search</a>
  );
}

export default SearchButton;