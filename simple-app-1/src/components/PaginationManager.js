import React from 'react';
import {Pagination} from 'react-bootstrap';

const PaginationManager = (props) => {
	const paginationItems = [];
	let i;
	for (i = 1; i <= props.pages; i++) {
		let n = i;
		paginationItems.push(<Pagination.Item key={n} onClick={() => props.handlePagination(n)}>{n}</Pagination.Item>);
	}
	return (
		<div>
			<Pagination>

				{/*<Pagination.First />*/}
				{/*<Pagination.Prev />*/}

				{paginationItems}

				{/*<Pagination.Next />*/}
				{/*<Pagination.Last />*/}
			</Pagination>
		</div>
	);
};

export default PaginationManager;