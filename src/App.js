import React, { Component, Fragment } from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Search from "./components/books/Search";
import Books from "./components/books/Books";
import Alert from "./components/layout/Alert";
import axios from "axios";

export class App extends Component {
  state = {
    books: [],
    loading: false,
    alert: null
  };

  searchBooks = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=0&maxResults=40`
    );
    this.setState({ books: res.data.items, loading: false });
  };

  setAlert = (msg, type)=> {
    this.setState({ alert: {msg, type} });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3600);
  };

  clearBooks = () => {
    this.setState({books: [], loading: false})
  }

  render() {
    const { books, loading, alert } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchBooks={this.searchBooks}
                      books={books}
                      setAlert={this.setAlert}
                      clearBooks = {this.clearBooks}
                    />
                    <Books books={books} loading={loading} />
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
