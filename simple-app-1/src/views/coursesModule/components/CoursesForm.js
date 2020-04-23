import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import PropTypes from "prop-types";

const CoursesForm = (props) => {
	return (
		<Form className="border p-5 rounded shadow m-5">
			<Form.Group controlId="title">
				<Form.Label>Course title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Course title"
					name="title"
					value={props.course.title}
					onChange={props.onFormChange}
				/>
				{/*
            onChange={event => setTitle(event.target.value)}
            */}
			</Form.Group>
			<Form.Group controlId="category">
				<Form.Label>Category</Form.Label>
				<Form.Control name="category" as="select">
					<option>Javascript</option>
					<option>React</option>
					<option>Software Architecture</option>
					<option>HTML 5</option>
					<option>CSS 3</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="description">
				<Form.Label>Description</Form.Label>
				<Form.Control
					name="description"
					as="textarea"
					rows="3"
					value={props.course.description}
					onChange={props.onFormChange}
				/>
			</Form.Group>
			<Form.Group controlId="submit">
				<Button variant="primary" className="btn-block btn-lg" type="submit">
					Create new course
				</Button>
			</Form.Group>
		</Form>
	);
};

CoursesForm.propTypes = {
	course: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		authorId: PropTypes.number,
		category: PropTypes.string,
		// : PropTypes.string.isRequired,
	}),
};

export default CoursesForm;
