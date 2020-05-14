import React from 'react';
import {Button, ButtonGroup, ListGroup} from "react-bootstrap";
import Liked from "../../../components/Liked";
import PropTypes from "prop-types";

const CourseItem = ({isTableLayout, course, onEdit, onDelete, handleLike}) => {
	if(isTableLayout){
		return (
			<tr>
				<td>{course.id}</td>
				<td><Liked size="2em" onClick={handleLike} course={course}/></td>
				<td>{course.title}</td>
				<td>{course.authorId}</td>
				<td>{course.category}</td>
				<td>
					<ButtonGroup size="sm" aria-label="Actions">
						<Button onClick={() => onDelete(course)} variant="outline-danger">Delete</Button>
						<Button href={'/course/'+course.id} variant="outline-info">Edit in page</Button>
						<Button onClick={() => onEdit(course)} variant="outline-info">Edit</Button>
					</ButtonGroup>
				</td>
			</tr>
		);
	}else{
		return (
			<ListGroup.Item href={"#" + course.id}>
				<div className="d-flex w-100 justify-content-between">
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
	}

};

CourseItem.propTypes = {
	course: PropTypes.object.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	handleLike: PropTypes.func.isRequired
};

export default CourseItem;