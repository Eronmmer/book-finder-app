import React from "react";
import PropTypes from "prop-types";

const BookItem = ({ book }) => {
  const {
    imageLinks,
    title,
    authors,
    publisher,
    publishedDate,
    description,
    pageCount,
    categories,
    previewLink
  } = book;
  return (
    <div style={{ marginBottom: "3rem", width: "100%" }}>
      <div>
        {imageLinks && (
          <img src={imageLinks.thumbnail} width="100px" alt="book cover " />
        )}
      </div>
      <div>
        {title && (
          <div>
            <h3 className="inline">Book Title: </h3> {title}
          </div>
        )}
        {authors && (
          <div>
            <h3 className="inline">Author: </h3>
            {authors[0]}
          </div>
        )}
        {publisher && (
          <div>
            <h3 className="inline">Publisher: </h3> {publisher}
          </div>
        )}
        {publishedDate && (
          <div>
            <h3 className="inline">Originally Published: </h3> {publishedDate}
          </div>
        )}
        {description && (
          <div>
            <h3 className="inline">Description: </h3> {description}
          </div>
        )}
        {pageCount && (
          <div>
            <h3 className="inline">Number of Pages: </h3> {pageCount}
          </div>
        )}
        {categories && (
          <div>
            <h3 className="inline">Categories</h3>: {categories[0]}
          </div>
        )}
        {previewLink && (
          <a
            href={previewLink}
            className="btn btn-dark"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            Preview
          </a>
        )}
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
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookItem;
