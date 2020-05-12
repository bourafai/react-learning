import React from 'react';
import CourseItem from "./CourseItem";
import {ListGroup} from "react-bootstrap";
import PropTypes from "prop-types";

const CoursesList = ({courses, onEdit, onDelete, handleLike}) => {

	return (
		<>
			<ListGroup className="shadow">
				{courses.map((course) => {
					return (
						<CourseItem
							onEdit={onEdit}
							onDelete={onDelete}
							course={course}
							key={course.id}
							handleLike={handleLike}
						/>
					);
				})}
			</ListGroup>
		</>
	);
};

CoursesList.propTypes = {
	courses: PropTypes.array.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	handleLike: PropTypes.func.isRequired
};

export default CoursesList;