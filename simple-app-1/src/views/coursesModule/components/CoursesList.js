import React from 'react';
import CourseItem from "./CourseItem";
import {ListGroup} from "react-bootstrap";

const CoursesList = ({courses, onEdit, onDelete}) => {

	return (
		<>
			<ListGroup className="shadow">
				{courses.map((course) => {
					return (
						<CourseItem
							onEdit={onEdit}
							onDelete={onDelete}
							title={course.title}
							key={course.id}
							id={course.id}
							cat={course.category}
						/>
					);
				})}
			</ListGroup>
		</>
	);
};

export default CoursesList;