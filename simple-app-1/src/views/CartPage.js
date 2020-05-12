import React from 'react';

const CartPage = ({itemsInCart}) => {
	return (
		<div className="container my-5">
			My Cart having {itemsInCart.length} items
		</div>
	);
};

export default CartPage;