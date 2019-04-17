import React, { Component } from "react";
import { register } from "../UserFuntions";
import Nav from "../Nav";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }
        register(user).then(res => {
            
                this.props.history.push("/login");
            
        }).catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Nav />
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col s4"></div>

                        {/* This is the login form */}
                        <form className="col s4" noValidate onSubmit={this.onSubmit}>
                            <h4>Sign Up</h4>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={this.state.first_name}
                                        onChange={this.onChange} />

                                    <label htmlFor="first_name">First Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text"
                                        id="last_name"
                                        name="last_name"
                                        value={this.state.last_name}
                                        onChange={this.onChange} />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="email"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange} />

                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="password"
                                        id="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <button 
                            className="btn waves-effect waves-light" 
                            type="submit" 
                            name="action">Sign Up
                                <i className="material-icons right">send</i>
                            </button>

                        </form>
                        <div className="col s4"></div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Register;