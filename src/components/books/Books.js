import React, { Component } from "react";
import BookItem from "./BookItem";

export class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.length > 0 && (
          <div className="books">
            {this.props.books.map(book => (
              <BookItem key={book.id} book={book.volumeInfo} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Books;
