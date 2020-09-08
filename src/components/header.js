import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container d-flex flex-column mb-5">
      <Link to="/">
        <h3 className="mr-5 ml-5">Home Page</h3>
      </Link>
    </div>
  );
};

export default Header;
