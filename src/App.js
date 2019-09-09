import React, { Component } from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {/* Alert component goes here */}
          <Switch>
            {/* Route to Search and Books here */}
            <Route exact path="/about" component={About} />
            {/* Route to NotFound here */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
