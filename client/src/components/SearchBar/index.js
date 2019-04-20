import React from "react";

function SearchBar(props) {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input placeholder="Zip Code" id="zipCode" type="input" className="validate" {...props}></input>
            </div>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;
