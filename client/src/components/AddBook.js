import React from "react";
import {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation
} from "./../queries/queries";
import { graphql, compose } from "react-apollo";

class AddBook extends React.Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
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
    let authorId = e.target.value;
    this.setState({ authorId });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };

  render() {
    let { authors, loading } = this.props.getAuthorsQuery;
    return (
      <section>
        <h2 className="title is-2"> Add New Book </h2>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label"> Book Name </label>
            <div className="control">
              <input
                type="text"
                className="input is-primary"
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
                className="input is-primary"
                onChange={this.handleGenre}
                placeholder="Genre"
              />
            </div>
          </div>

          <div className="field">
            <label className="label"> Author </label>
            <div className="control select is-primary">
              {!loading && (
                <select onChange={this.handleSelect}>
                  <option> Select author </option>
                  {authors.map(author => (
                    <option key={author.id} value={author.id}>
                      {author.name}
                    </option>
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

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
