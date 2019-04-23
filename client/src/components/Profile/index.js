import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import LargeForm from "../EditProfile"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            bio: "",
            Date_of_birth: "",
            remote: "",
            inperson: "",
            subjects: [],
            profileImage: "",
            address: "",
            lastclickedoption: []

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
            .then(tutor => 
                this.setState({
                id: tutor.data.id,
                bio: tutor.data.bio,
                Date_of_birth: tutor.data.Date_of_birth,
                remote: tutor.data.remote,
               
                inperson: tutor.data.inperson,
                subjects: tutor.data.subjects ? tutor.data.subjects.split(",") : [],
                profileImage: tutor.data.profileImage,
                address: tutor.data.address
            }, function(){
                console.log("updated state",this.state)
            })
            )
            .catch(err => console.log(err));
            

    }
    onChangeImage = e => {

    }
    onClickImage = e => {

    }
    onChangeBio = (e) => {

        var value = e.target.value;
        this.setState({ bio: value })
    }
    onClickBio = (e) => {
        e.preventDefault();

        var id = this.state.id;

        var data = {
            bio: this.state.bio
        }

        API.updateTutor(id, data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    onChangeSubjects = (e) => {
        var value = e.target.value;
        var subjects = this.state.subjects;

        // console.log(subjects);
        var index = subjects.indexOf(value);
        if (index === -1) { subjects.push(value) }
        else{subjects.pop(value)}
       
        console.log("index", index);

        this.setState({ subjects: subjects, lastclickedoption: value })

    }
    onClickSubjects = (e) => {
        e.preventDefault();

        var id = this.state.id;

        var mysubjects = this.state.subjects


        var data = {
            subjects: mysubjects.join(",")
        }

        API.updateTutor(id, data)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }

    onChangePersonal = e => {
        var name = e.target.name;
        var value = e.target.value;

        this.setState({ [name]: value }, function(){
            console.log("onchangepersonal",this.state)
        });
    }
    onClickPersonal = e => {
        e.preventDefault();

        var id = this.state.id;

        var data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            Date_of_birth: this.state.Date_of_birth,
            remote: this.state.remote,
            inperson: this.state.inperson,
            address: this.state.address

        }
        console.log(data)

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
                                                {/* Modal button */}
                                                <a className="btn-floating halfway-fab waves-effect waves-light  light-blue darken-4 modal-trigger" href="#modal0"><i className="material-icons">edit</i></a>


                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4"></div>
                        </div>
                    </div>
                </section>

                {/* This is the Image Section */}
                <section className="section">


                    {/* Modal Structure */}
                    <div id="modal0" className="modal">
                        <div className="modal-content">
                            <h4>Profile Picture</h4>

                            <form action="">
                                <div className="row">
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>File</span>
                                            <input type="file"></input>
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text"></input>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            

                        </div>
                        <div className="modal-footer">
                        <button className="btn waves-effect waves-light light-blue darken-4 modal-close"
                                type="submit"
                                name="action"
                                value={this.state.id}
                                onClick={this.onClickImage}>Submit
                                                 <i className="material-icons right">send</i>
                            </button>{" "}
                            <button href="#!" className="modal-close btn waves-effect  light-blue darken-4">Close</button>
                        </div>

                    </div>






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
                                            


                                        </form>

                                    </div>
                                    <div className="modal-footer">
                                    <button className="btn waves-effect waves-light light-blue darken-4 modal-close"
                                                type="submit"
                                                name="action"
                                                value={this.state.id}
                                                onClick={this.onClickBio}>Submit
                                                 <i className="material-icons right">send</i>
                                            </button> {" "}
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
                                                    <select multiple
                                                        id="subjects"
                                                        onChange={this.onChangeSubjects}
                                                    
                                                        value={this.state.subjects}
                                                    >
                                                        <option disabled={true} value="">Choose an option</option>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <option value="Science" >Science</option>
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


                                        </form>

                                    </div>

                                    <div className="modal-footer">
                                        <button className="btn waves-effect waves-light light-blue darken-4 modal-close"
                                            type="submit"
                                            name="action"
                                            onClick={this.onClickSubjects}>Submit
                                                 <i className="material-icons right">send</i>
                                        </button>
                                        {" "}
                                        <button href="#!" className="modal-close btn waves-effect  light-blue darken-4">Close</button>
                                    </div>

                                </div>



                                <span className="black-text"><strong>Area of knowledge</strong>

                                </span>
                                <div className="divider"></div>
                                <ul>
                                    {this.state.subjects.map(function (subject, i) {
                                        return (
                                            <li key={i} >{subject}</li>
                                        )
                                    }
                                    )}
                                </ul>
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
                                                        onChange={this.onChangePersonal}
                                                        value={this.state.first_name}

                                                    ></input>
                                                    <label htmlFor="first_name">First Name</label>
                                                </div>
                                                <div className="input-field col s4">
                                                    <input id="last_name"
                                                        type="text"
                                                        className="validate"
                                                        name="last_name"
                                                        onChange={this.onChangePersonal}
                                                        value={this.state.last_name}></input>
                                                    <label htmlFor="last_name">Last Name</label>
                                                </div>
                                                <div className="input-field col s4 browser-default">
                                                    <input id="Date_of_birth"
                                                        type="date"
                                                        name="Date_of_birth"
                                                        onChange={this.onChangePersonal}
                                                        value={this.state.Date_of_birth}></input>
                                                    <label htmlFor="Date_of_birth">Birthdate</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <select
                                                        name="remote"
                                                        onChange={this.onChangePersonal}
                                                        value={this.state.remote}>
                                                        <option value="">Choose an option</option>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                    <label>Are you available to tutor remotely (online)?</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <select
                                                        name="inperson"
                                                        onChange={this.onChangePersonal}
                                                        value={this.state.inperson}>
                                                        <option value="">Choose an option</option>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                    <label>Are you available to tutor in person?</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <GooglePlacesAutocomplete
                                                        onSelect={({ description }) => (
                                                            this.setState({ address: description })
                                                        )}
                                                    />
                                                    {/* <input id="address" 
                                                    type="text" 
                                                    className="validate" 
                                                    name="address"
                                                    ></input> */}
                                                    <label htmlFor="address"></label>
                                                </div>
                                            </div>


                                           
                                        </form>

                                    </div>
                                    
                                    <div className="modal-footer">
                                    <button className="btn waves-effect waves-light light-blue darken-4 modal-close"
                                                type="submit"
                                                name="action"
                                                onClick={this.onClickPersonal}>Submit
                                                 <i className="material-icons right">send</i>
                                            </button>{" "}
                                        <button href="#!" className="modal-close btn waves-effect  light-blue darken-4">Close</button>
                                    </div>

                                </div>







                                <span className="black-text"><strong>Personal Information</strong></span>
                                <div className="divider"></div>
                                <p>Name: {this.state.first_name}{" "}{this.state.last_name}</p>
                                <p>Date of birth: {this.state.Date_of_birth }</p>
                                <p>Remote sessions: {this.state.remote ? "Yes" : "No"}</p>
                                <p>Presental sessions: {this.state.inperson ? "Yes" : "No"}</p>
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