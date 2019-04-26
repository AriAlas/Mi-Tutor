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

        // var elems = document.querySelectorAll('.modal');
        // M.Modal.init(elems, M.options);
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


    
        // const data ={
        //     recipient:this.state.email.recipient,
        //     name:this.state.email.name,
        //     sender: this.state.email.sender,
        //     text:this.state.email.text
        // }
        // API.sendgrid(data)
        // .then(res => console.log(res))
        // .catch(err => console.log(err));

    


    render() {
        const tutorID = this.state.tutorId
 
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
                                            <div className="col s6">
                                                <span className="black-text">
                                                    <h4>{tutor.first_name}{" "}{tutor.last_name}</h4>
                                                    <p>{tutor.bio}</p>
                                                </span>
                                            </div>

                                            <div className="col s4">
                                                <span className="black-text">
                                                    <h4>Subjects:</h4>
                                                    <ul className="collection">
                                                        {tutor.subjects.split(",").map(subject => (
                                                            <li className="collection-item" key={subject}>{subject}</li>
                                                        ))}
                                                    </ul>
                                                </span>
                                                {/* <!-- Button redirecting to other component --> */}
                                              
                                                        <Link to={{pathname: "viewprofile", state: {id:tutor.id}}}   className="waves-light btn modal-trigger" name={tutor.id} onClick={this.clickHandler} >Contact Me!</Link>

                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                ))}
                            </div>
                       
                   
                </section>
                
            </div >
        )
    }
}

export default Remote;