    
import React, {Component} from "react"
import { Link } from "react-router-dom"
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
        height: "120px",
        width: "120px"
    }
    
    render() {
        const tutorId = this.state.tutorId

        return (
            <div>
                {this.state.tutors.map(tutor => (
                    <div className="row" key={tutor.id}>
                        <div className="col s12 m12">
                            <ul className="collection grey lighten-5 z-depth-1">
                                <div className="row">
                                    <li className="collection-item avatar valign-wrapper" style={this.collectionStyle}>
                                        <div className="col s1 m2">
                                            <div className="valign-wrapper">
                                                <img src={tutor.profileImage ? tutor.profileImage : `https://via.placeholder.com/150`} alt="" className="circle responsive-img" style={this.imgStyle} ></img>
                                            </div>
                                        </div>    
                                        <div className="col s5 m6">
                                            <span className="title"><h5>{tutor.first_name}{" "}{tutor.last_name}</h5></span>
                                            <p>{tutor.bio}</p>
                                        </div>
                                        <div className="col s2 m3">
                                            <ul>
                                                {tutor.subjects.split(",").map(subject => (
                                                <li key={subject}>{subject}</li>
                                                ))}
                                            </ul>
                                        </div>     
                                        <div className="col s2 m1">
                                            <Link to={{pathname: "viewprofile", state: {id:tutor.id}}}   className="waves-light btn modal-trigger right" name={tutor.id} onClick={this.clickHandler} >Contact Me!</Link>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        </div>
                ))}
            </div>    
        )

    }
};
export default Inperson;
