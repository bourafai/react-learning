import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";

const CourseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	return (
		<ListGroup.Item href={"#" + props.id}>
			<div className="d-flex w-100 justify-content-between">
				{/*<Link to={"/course/" + props.id}></Link>*/}
				<div className="left">
					<h6 className="mb-1">{title}</h6>
				</div>
				<div className="right">
					<small>{props.cat}</small>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<button className="btn btn-sm btn-info" onClick={()=> props.onEdit(props.id)}>Edit</button>
				<button className="btn btn-sm btn-danger ml-2" onClick={()=> props.onDelete(props.id)}>Delete</button>
			</div>
		</ListGroup.Item>
	);
};

export default CourseItem;