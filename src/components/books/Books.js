import React from "react";
import BookItem from "./BookItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Books = ({ loading, books }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      {books && books.length > 0 && (
        <div className="books">
          {books.map(book => (
            <BookItem key={book.id} book={book.volumeInfo} />
          ))}
        </div>
      )}
      {!books && (
        <div className="books">
          <p className="lead text-center">
            Sorry
            <span role="img" aria-label="cry emoji">
              😪
            </span>
            . No search results found. Try something else.
          </p>
        </div>
      )}
    </div>
  );
};

Books.propTypes = {
  loading: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired
};

export default Books;
