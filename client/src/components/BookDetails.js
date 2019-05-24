import React from "react";
import { getBookQuery } from "../queries/queries";
import { graphql } from "react-apollo";

class BookDetails extends React.Component {
  render() {
    let { book } = this.props.data;
    return (
      <section className="books-details">
        <h6 className="title is-6"> * Click on a book for more details </h6>
        {book && (
          <div className="box">
            <div className="content">
              <h3 className="title is-3"> {book.name}</h3>
              <p>
                {" "}
                <b> Genre</b>: {book.genre}{" "}
              </p>
              <p>
                {" "}
                <b> Author</b>: {book.author.name}{" "}
              </p>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.book
      }
    };
  }
})(BookDetails);
