import React from "react"
import Nav from "../Nav";
import API from "../../utils/API";

class Remote extends React.Component {
    state = {
        tutors: []
    }


    loadTutors = () => {
        API.getRemote().then(res => this.setState({ tutors: res.data }))
            .catch(err => console.log(err))

    }
    componentDidMount = () => {
        this.loadTutors();

    }


    render() {
        return (
            <div>
                <Nav />
                <section className="section">
                    <div className="container">
                        {this.state.tutors.map(tutor => (
                            <div className="row" key={tutor.id}>
                                <div className="col s10">
                                    <div className="card-panel white hoverable">
                                        <div class="row valign-wrapper">
                                            <div class="col s2">
                                                <img src={tutor.profileImage ? tutor.profileImage : `https://via.placeholder.com/150`} alt="" class="circle responsive-img" />
                                            </div>
                                            <div class="col s8">
                                                <span class="black-text">
                                                    <h4>{tutor.first_name}{" "}{tutor.last_name}</h4>
                                                    <p>{tutor.bio}</p>

                                                </span>
                                            </div>
                                            <div class="col s2">
                                                <span class="black-text">
                                                    <h4>Subjects:</h4>
                                                    <ul className="collection">
                                                        {tutor.subjects.split(",").map(subject => (
                                                            <li className="collection-item">{subject}</li>
                                                        ))}
                                                    </ul>
                                                </span>
                                                {/* Modal button */}
                                                <a class="waves-effect waves-light btn modal-trigger" href="#modal1"><i class="material-icons left">email</i>Contact</a>


                                                  {/* Modal Structure */}

                                                  <div id="modal1" className="modal">
                                    <div className="modal-content">
                                        <h4>Contact me</h4>

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




                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        ))}


                    </div>
                </section>
            </div>
        )
    }
}

export default Remote;