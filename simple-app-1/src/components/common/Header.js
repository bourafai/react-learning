import React from 'react';
import NavBar from "./NavBar";

const Header = (props) => {
	return (
		<div className="border-bottom">
			<NavBar menuItems={props.navigation} />
		</div>
	);
};

export default Header;