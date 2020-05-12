import React from 'react';
import {ListGroup} from "react-bootstrap";
import Liked from "../../../components/Liked";
import PropTypes from "prop-types";

const CourseItem = ({course, onEdit, onDelete, handleLike}) => {
	return (
		<ListGroup.Item href={"#" + course.id}>
			<div className="d-flex w-100 justify-content-between">
				{/*<Link to={"/course/" + id}></Link>*/}
				<div className="left">
					<Liked onClick={handleLike} course={course}/>
					<h6 className="mb-1">{course.title}</h6>
				</div>
				<div className="right" style={{minWidth: '20%', textAlign: 'right'}}>
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

CourseItem.propTypes = {
	course: PropTypes.object.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	handleLike: PropTypes.func.isRequired
};

export default CourseItem;