import React, { Component } from "react";
import { login } from "../UserFuntions";
import Nav from "../Nav";
import "./style.css"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            message: ""
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
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {
            if (res) {
                this.props.history.push("/profile");
            }
            else{this.setState({message:"Username or password not found"})}
        })
    }
    render() {
        return (
            <div className="login-wrapper">
                <Nav />
            <div className="section">
                <div className="container ">
                    <div className="row login">
                        <div className="col .hide-on-small-only m3"></div>

                        {/* This is the login form */}
                        <form className="col s12 m6 white-text" noValidate onSubmit={this.onSubmit}>
                            <h4>Sign In</h4>
                            <div className="row">
                                <div className="input-field col s12 ">
                                    <input type="email"
                                    className="white-text"
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
                                    className="white-text"
                                        id="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <button 
                            className="btn btn-lg waves-light transparent search-button" 
                            type="submit" 
                            name="action">Sign In
                                <i className="material-icons right ">send</i>
                            </button>

                        </form>
                        <div className="col hide-on-small-only m3"></div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Login;