import React from "react";
import API from "../../utils/API";



class Viewprofile extends React.Component {
    
        state = {
            
          
            email: {
                recipient: "",
                name: "",
                sender: "",
                text: ""
            
        }
    }
 
   componentDidMount(){
       const {id} = this.props.location.state
       console.log(id);
    API.getOneTutorid(id).then(res => console.log(res))

   }
    // onClickForm = e => {
    //     // e.preventDefault();
    //     // const recipient = e.target.name;

    //     // this.setState({email:{recipient:recipient}}, function(){console.log("actual state",this.state.email)})

    //     fetch(`http://localhost:3001/api/send?recipient=${this.state.email.recipient}&name=${this.state.email.name}&sender=${this.state.email.sender}&text=${this.state.email.text}`)
    //         .catch(err => console.log(err))
    // }
    // loadTutors = () => {
    //     API.getRemote().then(res => this.setState({ tutors: res.data }))
    //         .catch(err => console.log(err))
    // }
    render() {

        return (

<div>{this.props.location.state.id}</div>
        )
    }
}


export default Viewprofile;
