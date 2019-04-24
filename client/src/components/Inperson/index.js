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
        M.AutoInit();
        this.loadTutors();
    }
    render() {
        return (
        <div>
        {this.state.tutors.map(tutor => (
        <div key={tutor.id}>
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={tutor.profileImage ? tutor.profileImage : `https://via.placeholder.com/150`} alt="" className="circle"></img>
                    <span className="title">{tutor.first_name}{" "}{tutor.last_name}</span>
                        <p>{tutor.bio}<br></br>
                        {tutor.subjects}
                        </p>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </ul>
        </div>
        ))}
    </div>
    )
    }
};
export default Inperson;