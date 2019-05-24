import React from "react";

class BookListItem extends React.Component {
  handleClick = () => {
    this.props.onItemClick(this.props.value);
  };

  render() {
    return (
      <li onClick={this.handleClick}>
        {" "}
        <span>{this.props.book.name} </span>{" "}
      </li>
    );
  }
}

export default BookListItem;
