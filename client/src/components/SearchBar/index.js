import React from "react";

function SearchBar() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input placeholder="Zip Code" id="first_name" type="text" className="validate"></input>
              <label htmlFor="first_name">Find tutors near you!</label>
            </div>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;