import React from "react";

function SearchBar() {
    return (
        <div className="container">
        <form>
          <div className="input-field">
            <input id="search" type="search" required></input>
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
        </div>
    );
}

export default SearchBar;