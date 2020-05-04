import React from "react";
import {Button, Form} from "react-bootstrap";
import PropTypes from "prop-types";
import {slugify} from '../../../scripts/utils';

const CoursesForm = (props) => {

	return (
		<Form className="border p-5 rounded shadow mx-5" onSubmit={props.onFormSubmit}>
			<Form.Group controlId="title">
				<Form.Label>Course title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Course title"
					name="title"
					value={props.course.title}
					onChange={props.onFormChange}
				/>
				<Form.Text className="text-muted">
					the course slug is : {slugify(props.course.title)}
				</Form.Text>
			</Form.Group>
			<Form.Group controlId="category">
				<Form.Label>Author</Form.Label>
				<Form.Control name="authorId" as="select" required onChange={props.onFormChange}>
					<option value="" defaultValue disabled>Choose</option>
					{props.authors.map(value => <option value={Number(value.id)} key={value.id}>{value.name}</option>)}
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="category">
				<Form.Label>Category</Form.Label>
				<Form.Control name="category" as="select" onChange={props.onFormChange}>
					<option value="" defaultValue disabled hidden>Choose</option>
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
				<Button variant={undefined === props.course.id ? 'success' : 'primary' } className="btn-block btn-lg" type="submit">
					{undefined === props.course.id ? 'Create new course' : 'Edit Course' }
				</Button>
			</Form.Group>
			<Form.Group controlId="reset">
				<Button variant="outline-secondary" className="btn-block" onClick={props.handleReset}>
					Reset
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
