import React from 'react';

const CartPage = (props) => {
	console.log(props);
	return (
		<div className="container my-5">
			My Cart having {props.itemsInCart.length} items
		</div>
	);
};

export default CartPage;