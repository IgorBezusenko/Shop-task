import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" d-flex mb-5">
      <Link to="/">
        <h3 className="mr-5 ml-5">My App</h3>
      </Link>
      <ul className="list-group list-group-horizontal d-flex">
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

export default Header;
