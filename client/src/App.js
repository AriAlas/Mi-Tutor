import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./components/Login"
import Register from "./components/Register"
import Hero from "./components/Hero"

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={Hero} />
          </Switch>
        </div>
      </Router>
      
    );
};

export default App;
