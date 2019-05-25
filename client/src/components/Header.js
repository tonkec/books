import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/">Home</Link>
    <Link to="/create">Add New Book</Link>
    <a target="_blank" href="https://github.com/tonkec/books">
      Github
    </a>
  </header>
);

export default Header;
