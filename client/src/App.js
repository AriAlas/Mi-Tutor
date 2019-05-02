import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Tutors from "./components/Tutors";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Remote from "./components/Remote";
import SearchResults from './pages/SearchResults';
import Viewprofile from './components/Viewprofile';


function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search-results" component={SearchResults}/>
            <Route exact path="/tutors" component={Tutors} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/remote" component={Remote} />
            <Route  path="/viewprofile" component={Viewprofile} />
          </Switch>
        </div>
      </Router>
    );
};

export default App;
