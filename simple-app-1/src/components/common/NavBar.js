import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
	const activeItemClasses = "active alert-dark mx-1 nav-link rounded";
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/">
				Aymene App
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<nav>
					<ul className="navbar-nav">
						{props.menuItems.map((item,index) => (<NavLink
								key={index}
								exact
								activeClassName={activeItemClasses}
								className="nav-link"
								to={item.path}
							>
								{item.name}
							</NavLink>)
						)}
					</ul>
				</nav>
			</div>
		</nav>
	);
};

export default NavBar;
