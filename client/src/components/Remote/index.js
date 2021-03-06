import React from "react"
import { Link } from "react-router-dom"
import Nav from "../Nav";
import API from "../../utils/API";
import M from "materialize-css"

class Remote extends React.Component {
    constructor() {
        super();
        this.state = {
            tutors: [],
            tutorId: ""
        }
    }

    componentDidMount() {
        this.loadTutors();
        M.AutoInit();
    }

    loadTutors = () => {
        API.getRemote().then(res => this.setState({ tutors: res.data }))
            .catch(err => console.log(err))
    }

    clickHandler = e => {
        const name = e.target.name;
        this.setState({tutorId:name}, function(){console.log(this.state.tutorId)})
    }

    collectionStyle = {
        minHeight: "150px",
    }

    imgStyle = {
        minHeight: "120px",
        minWidth: "120px",
    }

    containerStyle= {
        maxWidth: "50%"
    }

    render() {
        return (
        <div className="indigo lighten-2 remote-wrapper">
            <Nav />
            <div className="container">
                <h1 className="white-text">Remote tutors:</h1>
            {this.state.tutors.map(tutor => (
                <div className="row" key={tutor.id}>
                    <div className="col s12 m12">
                        <ul className="collection grey lighten-5 z-depth-1 round-corners">
                            <div className="row">
                                <li className="collection-item avatar valign-wrapper" style={this.collectionStyle}>
                                    <div className="col s12 m2">
                                        <div className="valign-wrapper">
                                            <img src={tutor.profileImage ? tutor.profileImage : `https://via.placeholder.com/150`} alt="" className="circle responsive-img" style={this.imgStyle} ></img>
                                        </div>
                                    </div>    
                                    <div className="col s12  pull-s3 m6">
                                        <span className="title"><h5>{tutor.first_name}{" "}{tutor.last_name}</h5></span>
                                        <p>{tutor.bio}</p>
                                    </div>
                                    <div className="col hide-on-small-only m3">
                                        <ul>
                                            {tutor.subjects.split(",").map(subject => (
                                            <li key={subject}>{subject}</li>
                                            ))}
                                        </ul>
                                    </div>     
                                    {/* <div className="col s12 m1"> */}
                                        {/* <Link to={{pathname: "viewprofile", state: {id:tutor.id}}}   className="waves-light btn modal-trigger right" name={tutor.id} onClick={this.clickHandler} >Contact Me!</Link> */}
                                        <Link to={{pathname: "viewprofile", state: {id:tutor.id}}} name={tutor.id} onClick={this.clickHandler}  class="secondary-content"><i class="smaill material-icons">email</i></Link>
                                    {/* </div> */}
                                </li>
                                </div>
                        </ul>
                    </div>
                </div>
            ))}
            </div>
        </div>
        )
    }
};
export default Remote;