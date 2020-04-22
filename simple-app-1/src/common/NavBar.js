import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    const activeItemClasses = 'active alert-dark mx-1 nav-link rounded';
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Aymene App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <nav>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName={activeItemClasses} className="nav-link"
                                     to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={activeItemClasses} className="nav-link"
                                     to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={activeItemClasses} className="nav-link"
                                     to="/users">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={activeItemClasses} className="nav-link"
                                     to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={activeItemClasses} className="nav-link"
                                     to="/courses">Courses</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default NavBar;