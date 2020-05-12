import React from 'react';
import {ListGroup} from "react-bootstrap";
import Liked from "../../../components/Liked";

const CourseItem = ({course, onEdit, onDelete, handleLike}) => {
	return (
		<ListGroup.Item href={"#" + course.id}>
			<div className="d-flex w-100 justify-content-between">
				{/*<Link to={"/course/" + id}></Link>*/}
				<div className="left">
					<Liked onClick={handleLike} course={course}/>
					<h6 className="mb-1">{course.title}</h6>
				</div>
				<div className="right">
					<small>{course.category}</small>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<button className="btn btn-sm btn-info" onClick={() => onEdit(course)}>Edit</button>
				<button className="btn btn-sm btn-danger ml-2" onClick={() => onDelete(course)}>Delete</button>
			</div>
		</ListGroup.Item>
	);
};

export default CourseItem;