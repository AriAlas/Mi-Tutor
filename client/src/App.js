import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./pages/About";
import TutorsMap from "./pages/TutorsMap"

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
            <Route exact path="/tutorsmap" component={TutorsMap}/>
          </Switch>
        </div>
      </Router>
    );
};

export default App;
