import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchBooks(this.state.text);
    this.setState({ text: "" });
  };

  render() {
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
          You can search using anything related to the book like name, author or content
        </div>
      </>
    );
  }
}

export default Search;
