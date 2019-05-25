import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Header = () => (
  <header className="header">
    <Link to="/">Home</Link>
    <Link to="/create">Add New Book</Link>
  </header>
);

export default Header;
