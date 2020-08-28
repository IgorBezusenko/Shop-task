import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" d-flex">
      <Link to="/">
        <h2 className="mr-5">My App</h2>
      </Link>
      <ul className="list-group list-group-horizontal d-flex">
        <li className="list-group-item item ">
          <Link to="/counter">
            <h3>Counter</h3>
          </Link>
        </li>
        <li className="list-group-item item ">
          <Link to="/todoApp">
            <h3>Todo App</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
