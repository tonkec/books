import React from "react";
import BookDetails from "./BookDetails";
import BookListItem from "./BookListItem";
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
    let { books, loading } = this.props.data;

    return (
      <section className="books-list">
        <h2 className="title is-2"> List of books </h2>
        {!loading && (
          <div className="content">
            <ul id="book-list">
              {books.map(book => (
                <BookListItem
                  key={book.id}
                  value={book}
                  book={book}
                  onItemClick={this.handleClick}
                />
              ))}
            </ul>
            <BookDetails book={this.state.selectedBookId} />
          </div>
        )}
      </section>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
