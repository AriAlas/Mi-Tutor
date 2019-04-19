import React from "react";

function SearchBar() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input placeholder="Zip Code" id="zipCode" type="text" className="validate"></input>
            </div>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;