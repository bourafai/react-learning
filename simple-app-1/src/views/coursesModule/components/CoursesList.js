import React from 'react';
import CourseItem from "./CourseItem";
import {ListGroup} from "react-bootstrap";

const CoursesList = (props) => {

	return (
		<>
			<ListGroup className="shadow">
				{props.courses.map((value) => {
					return (
						<CourseItem
							onEdit={props.onEdit}
							onDelete={props.onDelete}
							title={value.title}
							key={value.id}
							id={value.id}
							cat={value.category}
						/>
					);
				})}
			</ListGroup>
		</>
	);
};

export default CoursesList;