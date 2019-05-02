import React, { Component } from 'react';
import { render } from 'react-dom';
import "./style.css"

class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }


  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = "https://maps.google.com/maps/api/js?key=AIzaSyBBU1xVisZcgNbmIYreSZJEfrfGTFV18-k";
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div className="section">
        <div className=" center-align">
        <span className="white-text"><h3>Tutors in your area:</h3></span>
          <div style={{ width: 1700, height: 500 }} id={this.props.id} />
        </div>
        </div>
    );
  }
}

export default Map;