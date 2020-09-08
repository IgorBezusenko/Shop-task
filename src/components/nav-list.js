import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div className="container d-flex flex-column mb-5">
      <ul className="list-group list-group-horizontal d-flex flex-column">
        <li className="list-group-item item ">
          <Link to="/counter">
            <h4>Counter</h4>
          </Link>
        </li>
        <li className="list-group-item item ">
          <Link to="/todoApp">
            <h4>Todo App</h4>
          </Link>
        </li>
        <li className="list-group-item item ">
          <Link to="/shoes-store">
            <h4>Shoes Store</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
