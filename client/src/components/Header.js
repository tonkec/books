import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Header = () => (
  <header>
    <Link to="/" className="ml1 no-underline black">
      Home
    </Link>
    <Link to="/create" className="ml1 no-underline black">
      Add New Book
    </Link>
  </header>
);

export default Header;
