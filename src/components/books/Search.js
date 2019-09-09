import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <>
        <form>
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
          />
          <div className="search-filters-with-submit">
            <div className="search-filters">
              <div className="filter-flex-item">
                <input type="checkbox" name="author" id="author" />
                <label htmlFor="author">By Author</label>
              </div>
              <div className="filter-flex-item">
                <input type="checkbox" name="publisher" id="publisher" />
                <label htmlFor="publisher">By Publisher</label>
              </div>
              <div className="filter-flex-item">
                <input type="checkbox" name="bookName" id="bookName" />
                <label htmlFor="bookName">By Book Name</label>
              </div>
            </div>
            <input
              type="submit"
              value="Search"
              className="btn btn-dark search-book-btn"
            />
          </div>
        </form>

        <div className="form-text">
          You can use the checkboxes above to filter your search.
        </div>
      </>
    );
  }
}

export default Search;
