import React from "react";
import {Badge, Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {RiSearchLine, RiShoppingCartLine} from "react-icons/ri";

const NavBar = ({shoppingState,menuItems}) => {
	const activeItemClasses = "active alert-dark mx-1 nav-link rounded";

	const renderCartButton = () => {
		return (
			<NavLink
				to="/cart"
				title="View Cart"
				activeClassName="active"
				className="btn btn-outline-primary m-2 my-sm-0">
				<RiShoppingCartLine/>
				<Badge
					variant="danger"
					style={{"marginLeft": "-5px", "minWidth": "19px"}}
					className="rounded-pill">
					{(typeof shoppingState.itemsInCart.length !== "undefined") ? shoppingState.itemsInCart.length : 0}
				</Badge>
			</NavLink>
		);
	};

	return <Navbar bg="light" expand="lg">
		<Navbar.Brand href="/">Aymene</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav"/>
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				{menuItems.map((item, index) => (<NavLink
						key={index}
						exact
						activeClassName={activeItemClasses}
						className="nav-link"
						to={item.path}
					>
						{item.name}
					</NavLink>)
				)}
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider/>
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2"/>
				<Button variant="outline-success"><RiSearchLine/></Button>
				{renderCartButton()}
			</Form>

		</Navbar.Collapse>
	</Navbar>;
};

export default NavBar;
