import React from "react";

function SearchBar() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input placeholder="Zip Code" id="first_name" type="text" className="validate"></input>
              <label for="first_name">Find tutors near you!</label>
              <a className="waves-effect waves-light btn-small"><i className="material-icons right">search</i>search</a>
            </div>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;
