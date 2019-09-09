import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    clearBooks: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!/\S/.test(this.state.text)) {
      this.props.setAlert("Please enter something", "danger");
    } else {
      this.props.searchBooks(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { clearBooks, books } = this.props;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Enter something."
            style={{
              marginBottom: 0,
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: "2px solid #1769ee",
              outline: "none"
            }}
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>

        <div className="form-text">
          You can search using anything related to the book like name, author or
          content
        </div>
        {books && books.length > 0 && (
          <button
            onClick={clearBooks}
            className="btn btn-block btn-danger"
            style={{ marginTop: "2rem" }}
          >
            Clear search results
          </button>
        )}
      </>
    );
  }
}

export default Search;
