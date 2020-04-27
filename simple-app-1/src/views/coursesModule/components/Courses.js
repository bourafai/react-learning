import React, {useState} from "react";
import {Col, Row, Tab} from "react-bootstrap";
import CoursesForm from "./CoursesForm";
import {slugify} from '../../../scripts/utils';
import CoursesList from "./CoursesList";
import {ToastProvider, useToasts} from 'react-toast-notifications';

const Courses = (props) => {

	const [course, setCourse] = useState({
		// id: 0,
		title: '',
		slug: '',
		description: '',
		authorId: 1,
		category: 'Javascript',
	});

	const {addToast} = useToasts();

	const handleFormChange = (event) => {
		const updatedCourse = {...course, [event.target.name]: event.target.value};
		console.log('updatedCourse', updatedCourse);
		if (event.target.name === 'title') {
			updatedCourse.slug = slugify(event.target.value);
		}
		if (event.target.name === 'authorId') {
			updatedCourse.authorId = Number(event.target.value);
		}
		// console.log(updatedCourse)
		setCourse(updatedCourse);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const {error} = await props.addCourse(course);
		if (error) {
			alert('error');
			addToast(error.message, {appearance: 'error'})
		} else {
			props.addCourse(course).then((_course) => {
				const oldCourses = [_course, ...props.courses];
				props.setCourses(oldCourses);
			});
			addToast('Saved Successfully', {appearance: 'success'})
		}


	};

	const handleEditCourse = (event) => {
		console.log(event.target.closest('.list-group-item'));
		// handleForm();
	};


	return (
		<>

			<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
				<Row>
					<Col sm={4}>
						<CoursesList courses={props.courses} onEdit={handleEditCourse} onDelete={handleEditCourse}/>

					</Col>
					<Col sm={8}>

						<CoursesForm authors={props.authors} course={course} onFormChange={handleFormChange}
						             onFormSubmit={handleFormSubmit}/>

					</Col>
				</Row>
			</Tab.Container>
		</>
	);
};

//validation with prop types
// Courses.propTypes = {
// 	courses: PropTypes.arrayOf(PropTypes.shape({
// 		id: PropTypes.number.isRequired,
// 		title: PropTypes.string.isRequired,
// 		description: PropTypes.string,
// 		authorId: PropTypes.number.isRequired,
// 		category: PropTypes.string.isRequired
// 	})).isRequired
// };
// // if the courses are undefined, the default value will be empty array
// Courses.defaultProps = {
// 	courses: []
// };

export default Courses;