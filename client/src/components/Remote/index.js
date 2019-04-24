import React from "react"
import Nav from "../Nav";
import API from "../../utils/API";
import M from "materialize-css";

class Remote extends React.Component {
    state = {
        tutors: []
    }
    
    loadTutors = () => {
        API.getRemote().then(res => this.setState({ tutors: res.data }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => {
        M.AutoInit();
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, M.options);
        this.loadTutors();
    }

    // onClickForm = e => {

    // } 
    // onChangeForm = e ={

    // }


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
                                        <div className="row valign-wrapper">
                                            <div className="col s2">
                                                <img src={tutor.profileImage ? tutor.profileImage : `https://via.placeholder.com/150`} alt="" className="circle responsive-img" />
                                            </div>
                                            <div className="col s8">
                                                <span className="black-text">
                                                    <h4>{tutor.first_name}{" "}{tutor.last_name}</h4>
                                                    <p>{tutor.bio}</p>
                                                </span>
                                            </div>
                                            <div className="col s2">
                                                <span className="black-text">
                                                    <h4>Subjects:</h4>
                                                    <ul className="collection">
                                                        {tutor.subjects.split(",").map(subject => (
                                                            <li className="collection-item" key={subject}>{subject}</li>
                                                        ))}
                                                    </ul>
                                                </span>

                                                {/* <!-- Modal Trigger --> */}
                                                <a className="waves-light btn modal-trigger" href={"#" + tutor.id}>Modal</a>

                                                {/* <!-- Modal Structure --> */}
                                                <div id={tutor.id} className="modal">
                                                    <div className="modal-content">
                                                        <h4>Contact me!</h4>
                                                        {/* Form goes here */}
                                                        <div className="row">
                                                            <div className="col s12">
                                                                <div className="row">
                                                                    <div className="input-field col s6">
                                                                        <input type="text"
                                                                            id="first-name"
                                                                            className="validate"
                                                                            onChange={this.onChangeForm} />
                                                                        <label htmlFor="first-name">First Name</label>
                                                                    </div>
                                                                    <div className="input-field col s6">
                                                                        <input type="text"
                                                                            id="last-name"
                                                                            className="validate"
                                                                            onChange={this.onChangeForm} />
                                                                        <label htmlFor="last-name">First Name</label>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="input-field col s12">
                                                                        <input type="email"
                                                                            id="email"
                                                                            className="validate"
                                                                            onChange={this.onChangeForm} />
                                                                        <label htmlFor="email">Email</label>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                   
                                                                        
                                                                            <div className="input-field col s12">
                                                                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                                                                <label htmlFor="textarea1">Message</label>
                                                                            </div>
                                                                       
                            
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                    <div className="modal-footer">
                                                        <button  className="modal-close waves-effect waves-light btn"
                                                        onClick={this.onClickForm}>Send <i className="material-icons right">send</i></button>
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