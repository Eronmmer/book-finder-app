import React, { Component } from 'react'

export class BookItem extends Component {
  render() {
    return (
      <div style={{ marginBottom: "3rem", width: "100%" }}>
        {/* {this.props.book.title} */}
        {/* {1 +1} */}
        <div>
          {this.props.book.imageLinks && <img
            src={this.props.book.imageLinks.thumbnail}
            width="100px"
            alt="book cover "
          />}
        </div>
        <div>
          {this.props.book.title && <div>
            <h3 className="inline">Book Title: </h3> {this.props.book.title}
          </div>}
          {this.props.book.authors && <div>
            <h3 className="inline">Author: </h3>
            {this.props.book.authors[0]}
          </div>}
          {this.props.book.publisher && <div>
            <h3 className="inline">Publisher: </h3> {this.props.book.publisher}
          </div>}
          {this.props.book.publishedDate && <div>
            <h3 className="inline">Originally Published: </h3>{" "}
            {this.props.book.publishedDate}
          </div>}
          {this.props.book.description && <div>
            <h3 className="inline">Description: </h3>{" "}
            {this.props.book.description}
          </div>}
          {this.props.book.pageCount && <div>
            <h3 className="inline">Number of Pages: </h3>{" "}
            {this.props.book.pageCount}
          </div>}
          {this.props.book.categories && <div><h3 className="inline">Categories</h3>: {this.props.book.categories[0]}</div>}
          {this.props.book.previewLink && <a
            href={this.props.book.previewLink}
            className="btn btn-dark"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            Preview
          </a>}
        </div>
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "3rem",
            height: "1px",
            background: "#000"
          }}
        ></div>
      </div>
    );
  }
}

export default BookItem

