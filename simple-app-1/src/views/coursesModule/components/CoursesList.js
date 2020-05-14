import React from 'react';
import CourseItem from "./CourseItem";
import {Col, ListGroup, Table} from "react-bootstrap";
import PropTypes from "prop-types";

const renderTable = ({isTableLayout, courses, onEdit, onDelete, handleLike}) => {
	return (
		<>
			<Table striped bordered hover>
				<thead>
				<tr>
					<th>ID</th>
					<th>liked</th>
					<th>Course Name</th>
					<th>Author</th>
					<th>Category</th>
					<th>Actions</th>
				</tr>
				</thead>
				<tbody>
				{courses.map((course) => {
					return (
						<CourseItem
							isTableLayout={isTableLayout}
							onEdit={onEdit}
							onDelete={onDelete}
							course={course}
							key={course.id}
							handleLike={handleLike}
						/>
					);
				})}
				</tbody>
			</Table>
		</>
	);
};

const renderListGroup = ({isTableLayout, courses, onEdit, onDelete, handleLike}) => {
	return (
		<>
			<Col sm={4}>
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
			</Col>
		</>
	);
};

const CoursesList = (props) => {
	if (props.isTableLayout) {
		return renderTable(props);
	} else {
		return renderListGroup(props);
	}
};

CoursesList.propTypes = {
	courses: PropTypes.array.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	handleLike: PropTypes.func.isRequired
};

export default CoursesList;