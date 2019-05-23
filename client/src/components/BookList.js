import React, { Component } from "react";
import { getBooksQuery } from "./../queries/queries";
import { graphql } from "react-apollo";

const BookList = ({ data }) => {
  let { books, loading } = data;

  return (
    <section>
      <h1 className="title is-1"> List of your books </h1>
      {!loading && (
        <div className="content">
          <ul id="book-list">
            {books.map(book => (
              <li key={book.id}> {book.name} </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default graphql(getBooksQuery)(BookList);
