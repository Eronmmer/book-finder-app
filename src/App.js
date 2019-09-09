import React, { Component, Fragment } from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Search from "./components/books/Search";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            {/* Alert component goes here */}
            <Switch>
              {/* Route to Search and Books here */}
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              {/* Route to NotFound here */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
