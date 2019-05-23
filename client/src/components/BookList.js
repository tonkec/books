import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  query {
    books {
      name
      genre
      id
    }
  }
`;

class BookList extends Component {
  showBooks = () => {
    let data = this.props.data;
    if (data.loading) {
      return <p> Loading books </p>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}> {book.name} </li>;
      });
    }
  };

  render() {
    return (
      <ul id="book-list">
        {console.log(this.props)}
        {this.showBooks()}
      </ul>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
