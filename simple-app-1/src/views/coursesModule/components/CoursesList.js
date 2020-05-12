import React from 'react';
import CourseItem from "./CourseItem";
import {ListGroup} from "react-bootstrap";

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

export default CoursesList;