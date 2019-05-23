import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  query {
    authors {
      name
      id
    }
  }
`;

const AddBook = ({ data }) => {
  let { authors, loading } = data;
  return (
    <section>
      <h2> Add New Book </h2>
      <form>
        <label> Book Name </label>
        <input type="text" />

        <label> Genre </label>
        <input type="text" />

        <label> Author </label>
        {!loading && (
          <select>
            {authors.map(author => (
              <option key={author.id}> {author.name} </option>
            ))}
          </select>
        )}
        <button> Add Book </button>
      </form>
    </section>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
