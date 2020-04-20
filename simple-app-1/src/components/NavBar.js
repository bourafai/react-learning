import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
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
                            <Link activeClassName="active" className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName="active" className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName="active" className="nav-link" to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default NavBar;