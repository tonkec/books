import React from "react";
import { getAuthorsQuery, addBookMutation } from "./../queries/queries";
import { graphql } from "react-apollo";

class AddBook extends React.Component {
  state = {
    name: "",
    genre: "",
    author: ""
  };

  handleBookName = e => {
    let name = e.target.value;
    this.setState({ name });
  };

  handleGenre = e => {
    let genre = e.target.value;
    this.setState({ genre });
  };

  handleSelect = e => {
    let author = e.target.value;
    this.setState({ author });
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    let { authors, loading } = this.props.data;
    return (
      <section>
        <h2 className="title is-2"> Add New Book </h2>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label"> Book Name </label>
            <div className="control">
              <input
                type="text"
                className="input"
                onChange={this.handleBookName}
                placeholder="Book Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label"> Genre </label>
            <div className="control">
              <input
                type="text"
                className="input"
                onChange={this.handleGenre}
                placeholder="Genre"
              />
            </div>
          </div>

          <div className="field">
            <label className="label"> Author </label>
            <div className="control select">
              {!loading && (
                <select onChange={this.handleSelect}>
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
  }
}

export default graphql(getAuthorsQuery)(AddBook);
