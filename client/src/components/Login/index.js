import React, { Component } from "react";
import { login } from "../UserFuntions";

class Login extends Component {
    constructor() {
        super();
        this.state = {
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
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {
            if (res) {
                this.props.history.push("/profile");
            }
        })
    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col s4"></div>

                        {/* This is the login form */}
                        <form className="col s4" noValidate onSubmit={this.onSubmit}>
                            <h4>Please Sign In</h4>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange} />

                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text"
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
                            name="action">Sign In
                                <i className="material-icons right">send</i>
                            </button>

                        </form>
                        <div className="col s4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;