import React, {Component} from "react"
import API from "../../utils/API";
import M from "materialize-css";

class Inperson extends Component {
    state = {
        tutors: []
    }
    loadTutors = () => {
        API.getInperson().then(res => this.setState({ tutors: res.data }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => {
        this.loadTutors();
        M.AutoInit();
    }
    collectionStyle = {
        minHeight: "150px"
    }
    imgStyle = {
        height: "100px",
        width: "100px"
    }
    render() {
        return (
        <div>
        {this.state.tutors.map(tutor => (
        <div key={tutor.id}>
        <ul className="collection grey lighten-5 z-depth-1">
            <li className="collection-item avatar valign-wrapper" style={this.collectionStyle}>
                <img src={tutor.profileImage ? tutor.profileImage : `https://via.placeholder.com/150`} alt="" className="circle" style={this.imgStyle} ></img>
                    <div className="container">
                        <span className="title">{tutor.first_name}{" "}{tutor.last_name}</span>
                            <p>{tutor.bio}<br></br>
                            {tutor.subjects}
                            </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </div>
            </li>
        </ul>
        </div>
        ))}
    </div>
    )
    }
};
export default Inperson;