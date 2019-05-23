import React, { Component } from "react";
import { getBooksQuery } from "./../queries/queries";
import { graphql } from "react-apollo";

const BookList = ({ data }) => {
  let { books, loading } = data;

  return (
    <section>
      <h1> List of your books </h1>
      {!loading && (
        <ul id="book-list">
          {books.map(book => (
            <li key={book.id}> {book.name} </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default graphql(getBooksQuery)(BookList);
