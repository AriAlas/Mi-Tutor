import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import LargeForm from "../EditProfile"

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            bio: "",
            age: "",
            remote: "",
            inperson: "",
            subjects: [],
            profileImage: "",
            address: ""

        }
    }
    componentDidMount() {
        const token = localStorage.userToken;
        const decoded = jwt_decode(token)
        const email = decoded.email;
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email

        })

        API.getOneTutor(email)
            .then(tutor => this.setState({id:tutor.data.id, bio: tutor.data.bio, age: tutor.data.age, remote: tutor.data.remote, inperson: tutor.data.inperson, subjects: tutor.data.subjects, profileImage: tutor.data.profileImage, address: tutor.data.address }))
            .catch(err => console.log(err));

    }
    onChangeBio = (e) => {
      
        var value = e.target.value;
        this.setState({bio:value})
    }
    onClickBio = (e) => {
        e.preventDefault();
        
        var id = this.state.id;

      var data ={
             bio: this.state.bio   
        }

        API.updateTutor(id, data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    onChangeSubjects = (e) => {
        var value = e.target.value;
        var subjects = this.state.subjects;
        console.log(subjects);
        // subjects.push(value)
        this.setState({subjects:subjects})
        
    }
    onClickSubjects = (e) => {
        e.preventDefault();

        var id = this.state.id;

        var data = {
            subjects : this.state.subjects
        }
        API.updateTutor(id, data)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }


    render() {
        return (

            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">MiTutor</Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/about">About</Link></li>
                            {/* If Authenticated This <a> tag is Profile */}
                            {/* If NOT authenticated this tag is  LOGIN*/}
                            <li><Link to="/tutors">LogOut</Link></li>
                        </ul>
                    </div>
                </nav>

                {/* This is the profile picture */}
                <section className="section">
                    <div className="container ">
                        <div className="row">
                            <div className="col s4"></div>



                            <div className="col s4 ">
                                <div className="card hoverable">
                                    <div className="card-image">
                                        <img src="https://via.placeholder.com/150" />
                                        <span className="card-title black-text">{this.state.first_name}{" "}{this.state.last_name}</span>
                                        <form action="">
                                            <div className="file-field">
                                               
                                                <a className="btn-floating halfway-fab waves-effect waves-light  light-blue darken-4" href=""><i className="material-icons">edit</i></a>
                                                
                                               
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4"></div>
                        </div>
                    </div>
                </section>

                {/* This is the BIO Section */}
                <section className="section">






                    <div className="row">
                        <div className="col s1"></div>
                        <div className="col s10">
                            <div className="card-panel white hoverable">
                                {/* Modal button */}
                                <div className="right-align "><a className="btn-floating waves-effect waves-light light-blue darken-4 modal-trigger" href="#modal1"><i className="material-icons">edit</i></a></div>


                                {/* Modal Structure */}
                                <div id="modal1" className="modal">
                                    <div className="modal-content">
                                        <h4>About you</h4>

                                        <form action="">
                                            <div className="row">
                                                <div className="input-field col s12">

                                                    <input id="bio" 
                                                    type="text" 
                                                    className="validate" 
                                                    name="bio"
                                                    value={this.state.bio}
                                                    onChange={this.onChangeBio}
                                                    ></input>
                                                    <label htmlFor="bio">Tell us a little about yourself!</label>
                                                </div>
                                            </div>
                                            <button className="btn waves-effect waves-light light-blue darken-4" 
                                            type="submit" 
                                            name="action"
                                            value={this.state.id}
                                            onClick={this.onClickBio}>Submit
                                                 <i className="material-icons right">send</i>
                                            </button>


                                        </form>

                                    </div>
                                    <div className="modal-footer">
                                        <button href="#!" className="modal-close btn waves-effect  light-blue darken-4">Close</button>
                                    </div>

                                </div>

                                <span className="black-text"><strong>About me</strong>

                                </span>
                                <div className="divider"></div>
                                <p>{this.state.bio}</p>
                            </div>
                        </div>
                        <div className="col s1"></div>
                    </div>




                    <div className="row">
                        <div className="col s2"></div>
                        <div className="col s4">
                            <div className="card-panel white hoverable">
                                {/* Modal button */}
                                <div className="right-align"><a className="btn-floating waves-effect waves-light light-blue darken-4 modal-trigger" href="#modal2"><i className="material-icons">edit</i></a></div>

                                {/* Modal Structure */}
                                <div id="modal2" className="modal modal-fixed-footer">
                                    <div className="modal-content">
                                        <h4>Subjects</h4>

                                        <form action="">

                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <select multiple id="subjects" 
                                                    onChange={this.onChangeSubjects} 
                                                    value={this.state.subjects}>
                                                        <option disabled={true} value="">Choose an option</option>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <option value="Science">Science</option>
                                                        <option value="Music">Music</option>
                                                        <option value="Art">Art</option>
                                                        <option value="English">English</option>
                                                        <option value="Other-Languages">Other Languages</option>
                                                        <option value="Social Studies">Social Studies</option>
                                                        <option value="History">History</option>
                                                        <option value="Health">Health</option>
                                                    </select>
                                                    <label>What subjects do you feel comfortable teaching?</label>
                                                </div>
                                            </div>
                                            <button className="btn waves-effect waves-light light-blue darken-4" 
                                            type="submit" 
                                            name="action"
                                            onClick={this.onClickSubjects}>Submit
                                                 <i className="material-icons right">send</i>
                                            </button>

                                        </form>

                                    </div>
                                    <div className="modal-footer">
                                        <button href="#!" className="modal-close btn waves-effect  light-blue darken-4">Close</button>
                                    </div>

                                </div>



                                <span className="black-text"><strong>Area of knowledge</strong>

                                </span>
                                <div className="divider"></div>
                                <p>{this.state.subjects}</p>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="card-panel white hoverable">
                                {/* Modal button */}
                                <div className="right-align"><a className="btn-floating waves-effect waves-light light-blue darken-4 modal-trigger" href="#modal3"><i className="material-icons">edit</i></a></div>

                                {/* Modal Structure */}
                                <div id="modal3" className="modal modal-fixed-footer">
                                    <div className="modal-content">
                                        <h4>Personal Information</h4>

                                        <form action="">
                                            <div className="row">
                                                <div className="input-field col s4">
                                                    <input id="first_name" 
                                                    type="text" 
                                                    className="validate" 
                                                    name="first_name"
                                                    
                                                  ></input>
                                                    <label htmlFor="first_name">First Name</label>
                                                </div>
                                                <div className="input-field col s4">
                                                    <input id="last_name" type="text" className="validate" name="last_name"></input>
                                                    <label htmlFor="last_name">Last Name</label>
                                                </div>
                                                <div className="input-field col s4 browser-default">
                                                    <input type="date" name="bday"></input>
                                                    <label htmlFor="age">Birthdate</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <select name="remote" defaultValue={"default"}>
                                                        <option disabled={true} value="default">Choose an option</option>
                                                        <option value="1">Yes</option>
                                                        <option value="0">No</option>
                                                    </select>
                                                    <label>Are you available to tutor remotely (online)?</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <select name="inperson" defaultValue={"default"}>
                                                        <option disabled={true} value="" value="default">Choose an option</option>
                                                        <option value="1">Yes</option>
                                                        <option value="0">No</option>
                                                    </select>
                                                    <label>Are you available to tutor in person?</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input id="address" type="text" className="validate" name="address"></input>
                                                    <label htmlFor="address">Address</label>
                                                </div>
                                            </div>


                                            <button className="btn waves-effect waves-light light-blue darken-4" type="submit" name="action">Submit
                                                 <i className="material-icons right">send</i>
                                            </button>
                                        </form>

                                    </div>
                                    <div className="modal-footer">
                                        <button href="#!" className="modal-close btn waves-effect  light-blue darken-4">Close</button>
                                    </div>

                                </div>







                                <span className="black-text"><strong>Personal Information</strong></span>
                                <div className="divider"></div>
                                <p>Name: {this.state.first_name}{" "}{this.state.last_name}</p>
                                <p>Age: {this.state.age}</p>
                                <p>Remote sessions: {this.state.remote}</p>
                                <p>Presental sessions: {this.state.inperson}</p>
                                <p>Address: {this.state.address}</p>
                            </div>
                        </div>
                        <div className="col s2"></div>
                    </div>




                </section>
            </div>

        )
    }
}
export default Profile;