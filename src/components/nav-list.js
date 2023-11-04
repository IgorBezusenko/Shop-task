import React from "react";
import {Link} from "react-router-dom";

const NavList = ({close}) => {

    return (
        <ul className="container list-group list-group-horizontal d-flex flex-md-row flex-column">
            <li className="list-group-item item ">
                <Link to="/Shop-task"  onClick={close}>
                    <h4>Главная</h4>
                </Link>
            </li>
            <li className="list-group-item item ">
                <Link to="/Shop-task/counter" onClick={close}>
                    <h4>Counter</h4>
                </Link>
            </li>
            <li className="list-group-item item ">
                <Link to="/Shop-task/todoApp" onClick={close}>
                    <h4>Todo App</h4>
                </Link>
            </li>
            <li className="list-group-item item ">
                <Link to="/Shop-task/shoes-store" onClick={close}>
                    <h4>Shoes Store</h4>
                </Link>
            </li>
        </ul>
    );
};

export default NavList;
