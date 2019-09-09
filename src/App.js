import React, { Component, Fragment } from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Search from "./components/books/Search";
import Books from './components/books/Books'
import axios from "axios";

export class App extends Component {
  state = {
    books: [],
    loading: false
  };

  searchBooks = async text => {
    this.setState({loading: true})
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=0&maxResults=40`
    );
    this.setState({ books: res.data.items, loading: false });
  };

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
                    <Search
                      searchBooks={this.searchBooks}
                    />
                    <Books books={this.state.books} loading={this.state.loading} />
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
