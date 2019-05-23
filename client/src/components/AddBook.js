import React from "react";
import { getAuthorsQuery } from "./../queries/queries";
import { graphql } from "react-apollo";

const AddBook = ({ data }) => {
  let { authors, loading } = data;
  return (
    <section>
      <h2 className="title is-2"> Add New Book </h2>
      <form>
        <div className="field">
          <label className="label"> Book Name </label>
          <div className="control">
            <input type="text" className="input" />
          </div>
        </div>

        <div className="field">
          <label className="label"> Genre </label>
          <div className="control">
            <input type="text" className="input" />
          </div>
        </div>

        <div className="field">
          <label className="label"> Author </label>
          <div className="control select">
            {!loading && (
              <select>
                {authors.map(author => (
                  <option key={author.id}> {author.name} </option>
                ))}
              </select>
            )}
          </div>
        </div>

        <button className="button is-black"> Add Book </button>
      </form>
    </section>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
