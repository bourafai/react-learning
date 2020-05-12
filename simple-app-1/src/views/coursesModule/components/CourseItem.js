import React from 'react';
import {ListGroup} from "react-bootstrap";

const CourseItem = ({title, id, onEdit, onDelete, cat}) => {
	return (
		<ListGroup.Item href={"#" + id}>
			<div className="d-flex w-100 justify-content-between">
				{/*<Link to={"/course/" + id}></Link>*/}
				<div className="left">
					<h6 className="mb-1">{title}</h6>
				</div>
				<div className="right">
					<small>{cat}</small>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<button className="btn btn-sm btn-info" onClick={() => onEdit(id)}>Edit</button>
				<button className="btn btn-sm btn-danger ml-2" onClick={() => onDelete(id)}>Delete</button>
			</div>
		</ListGroup.Item>
	);
};

export default CourseItem;