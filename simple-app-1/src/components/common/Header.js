import React from 'react';
import NavBar from "./NavBar";

const Header = (props) => {
	return (
		<div className="border-bottom">
			<NavBar shoppingState={props.shoppingState} menuItems={props.navigation} />
		</div>
	);
};

export default Header;