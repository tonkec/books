import React from "react";
import BookListItem from "./BookListItem";
import BookDetails from "./BookDetails";

const Books = props => (
  <div className="content">
    <ul id="book-list">
      {props.content.books.map(book => (
        <BookListItem
          key={book.id}
          value={book}
          book={book}
          onItemClick={props.handle}
        />
      ))}
      <BookDetails book={props.bookId} />
    </ul>
  </div>
);

export default Books;
