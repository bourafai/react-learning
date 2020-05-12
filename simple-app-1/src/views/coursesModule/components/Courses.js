import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import CoursesForm from "./CoursesForm";
import {slugify} from '../../../scripts/utils';
import CoursesList from "./CoursesList";
import {useToasts} from 'react-toast-notifications';
import PromptModal from "./PromptModal";

const Courses = ({courses, setCourses, addCourse, authors}) => {
	const defaultCourse = {
		// id: 0,
		title: '',
		slug: '',
		description: '',
		authorId: 1,
		category: 'Javascript',
	};
	const [course, setCourse] = useState(defaultCourse);
	//state of courses to delete (we store IDs)
	const [itemToDelete, setItemToDelete] = useState(0);

	//bootstrap modal
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	const {addToast} = useToasts();

	const handleFormChange = (event) => {
		const updatedCourse = {...course, [event.target.name]: event.target.value};
		if (event.target.name === 'title') {
			updatedCourse.slug = slugify(event.target.value);
		}
		if (event.target.name === 'authorId') {
			updatedCourse.authorId = Number(event.target.value);
		}
		setCourse(updatedCourse);
	};

	const handleFormReset = () => {
		setCourse(defaultCourse);
		addToast('Form reset', {appearance: 'info'})
	};

	const editCourse = () => {
		let oldCourses = [...courses];
		let editedIndex = oldCourses.findIndex((e) => e.id === course.id);
		oldCourses[editedIndex] = course;
		setCourses(oldCourses);
	};

	const createNewCourse = async () => {
		const {error} = await addCourse(course);
		if (error) {
			alert('error');
			addToast(error.message, {appearance: 'error'})
		} else {
			addCourse(course).then((_course) => {
				const oldCourses = [_course, ...courses];
				setCourses(oldCourses);
			});
			addToast('Saved Successfully', {appearance: 'success'});
			setCourse(defaultCourse);
		}
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		(course.id !== undefined) ? editCourse() : createNewCourse();
	};

	const handleEditCourse = (id) => {
		let item = courses.filter((item) => item.id === id ? item : false)[0];
		setCourse(item);
	};

	const handleDeleteCourse = (id) => {
		setItemToDelete(() => id);
		handleShowModal();
	};

	const deleteCourse = () => {
		let tempCourses = courses.reduce((items, course) => {
			if (course.id !== itemToDelete) items.push(course);
			return items;
		}, []);
		setCourses(tempCourses);
		handleCloseModal();
		addToast('Course deleted', {appearance: 'warning'})
	};

	const renderCoursesList = () => {
		if (courses.length === 0) return <h3>No Courses available</h3>;
		return <CoursesList courses={courses} onEdit={handleEditCourse} onDelete={handleDeleteCourse}/>;
	};

	return (
		<>
			<PromptModal toDelete={itemToDelete} handleConfirm={deleteCourse} handleClose={handleCloseModal}
			             show={showModal}/>
			<Row>
				<Col sm={4}>
					{renderCoursesList()}
				</Col>
				<Col sm={8}>
					<CoursesForm
						authors={authors}
						course={course}
						onFormChange={handleFormChange}
						onFormSubmit={handleFormSubmit}
						handleReset={handleFormReset}
					/>
				</Col>
			</Row>
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