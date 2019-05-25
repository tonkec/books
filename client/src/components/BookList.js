import React from "react";
import Content from "./Content";
import Books from "./Books";

import { getBooksQuery } from "./../queries/queries";
import { graphql } from "react-apollo";

class BookList extends React.Component {
  state = {
    selectedBookId: null
  };

  handleClick = book => {
    this.setState({ selectedBookId: book.id });
  };

  render() {
    let { loading } = this.props.data;

    return (
      <section className="books-list">
        <h2 className="title is-2"> List of books </h2>
        {!loading && (
          <Content
            content={this.props.data}
            component={
              <Books
                content={this.props.data}
                handle={this.handleClick}
                bookId={this.state.selectedBookId}
              />
            }
          />
        )}
      </section>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
