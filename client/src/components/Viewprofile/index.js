import React from "react";
import Nav from "../Nav"
import API from "../../utils/API";
import "./style.css"

class Viewprofile extends React.Component {

    state = {
        tutoremail: "",
        first_name: "",
        last_name: "",
        bio: "",
        profileImage: "",
        subjects: [],
        email: {
            recipient: "",
            name: "",
            sender: "",
            text: ""
        },
        emailSent: ""
    }

    componentDidMount() {
        const { id } = this.props.location.state
        console.log(id);
        API.getOneTutorid(id).then(res =>
            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                bio: res.data.bio,
                profileImage: res.data.profileImage,
                subjects: res.data.subjects.split(","),
                tutoremail: res.data.email
            }, function () { console.log(this.state) }))

    }
    onClickForm = e => {
        e.preventDefault();
            const data = {
            recipient: this.state.tutoremail,
            sender: this.state.email.sender,
            name: this.state.email.name,
            text: this.state.email.text,
        }
        console.log(data)
        API.sendgrid(data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .then(document.getElementById("sender").value="",
            document.getElementById("name").value="",
            document.getElementById("textarea1").value="")
            .then(
                this.setState({
                    emailSent: "Message sent!"
                })
            )
    }
        //    this.setState({email:{recipient:recipient}}, function(){console.log("actual state",this.state.email)})

        //   fetch(`http://localhost:3001/api/send?recipient=${this.state.email.recipient}&name=${this.state.email.name}&sender=${this.state.email.sender}&text=${this.state.email.text}`)
        //  .catch(err => console.log(err))
        //    }

        render() {
            const { email } = this.state;

            return (

                <div className="viewprofile-wrapper">
                <Nav />
                        <div className="row">
                            <div className="col s12">
                               <h3 className="white-text center-align">Contact {this.state.first_name}{" "}{this.state.last_name}</h3>
                                <div className="row">
                                    {/* <div className="col s12 m12">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={this.state.profileImage ? this.state.profileImage : "https://via.placeholder.com/150"} alt="profileImage"/>
                                            </div>
                                            <div className="card-content">
                                                <p>{this.state.bio}</p>
                                                <h5>Subjects:</h5>
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
                                    </div> */}
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col .hide-on-small-only m3"></div>
                            <div className="col s12 m6 form">
                                <div className="section">
                                    <div className="row">
                                        <div className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="text"

                                                        id="name"
                                                        className="validate white-text"
                                                        name="name"
                                                        onChange={e => this.setState({ email: { ...email, name: e.target.value } })}
                                                    />
                                                    <label htmlFor="name">Name</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="email"
                                                        id="sender"
                                                        className="validate white-text"
                                                        name="sender"
                                                        onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                                                    <label htmlFor="sender">Email</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <textarea id="textarea1"
                                                        className="materialize-textarea white-text"
                                                        name="text"
                                                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })}
                                                    ></textarea>
                                                    <label htmlFor="textarea1">Message</label>
                                                </div>
                                            </div>
                                            <div className="emailSent">
                                                <a className=" blue-text btn-flat btn-large disabled">{ this.state.emailSent }</a>
                                            </div>
                                            <button className="btn waves-light btn-lg transparent search-button "
                                                type="submit"
                                                name={this.state.tutoremail}
                                                onClick={this.onClickForm}>Send
                                            <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col .hide-on-small-only m3"></div>
                        </div>
                      
                    </div>               
            )
        }
    }


    export default Viewprofile;
