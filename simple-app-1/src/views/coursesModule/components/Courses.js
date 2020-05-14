import React, {useState} from "react";
import {Row} from "react-bootstrap";
import CoursesForm from "./CoursesForm";
import {slugify} from '../../../scripts/utils';
import CoursesList from "./CoursesList";
import {useToasts} from 'react-toast-notifications';
import PromptModal from "./PromptModal";
import PropTypes from "prop-types";

const Courses = ({isTableLayout, courses, setCourses, addCourse, authors}) => {
	const defaultCourse = {
		// id: 0,
		title: '',
		slug: '',
		description: '',
		authorId: 1,
		category: 'Javascript',
		liked: false,
	};
	//updateCourse
	const [editedCourse, setEditedCourse] = useState(defaultCourse);
	//state of courses to delete (we store IDs)
	const [itemToDelete, setItemToDelete] = useState(0);

	//bootstrap modal
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	const {addToast} = useToasts();

	const handleFormChange = (event) => {
		const updatedCourse = {...editedCourse, [event.target.name]: event.target.value};
		if (event.target.name === 'title') {
			updatedCourse.slug = slugify(event.target.value);
		}
		if (event.target.name === 'authorId') {
			updatedCourse.authorId = Number(event.target.value);
		}
		setEditedCourse(updatedCourse);
	};

	const handleFormReset = () => {
		setEditedCourse(defaultCourse);
		addToast('Form reset', {appearance: 'info'})
	};

	const editCourse = () => {
		let oldCourses = [...courses];
		let editedIndex = oldCourses.findIndex((e) => e.id === editedCourse.id);
		oldCourses[editedIndex] = editedCourse;
		setCourses(oldCourses);
	};

	const createNewCourse = async () => {
		const {error} = await addCourse(editedCourse);
		if (error) {
			alert('error');
			addToast(error.message, {appearance: 'error'})
		} else {
			addCourse(editedCourse).then((_course) => {
				const oldCourses = [_course, ...courses];
				setCourses(oldCourses);
			});
			addToast('Saved Successfully', {appearance: 'success'});
			setEditedCourse(defaultCourse);
		}
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		(editedCourse.id !== undefined) ? editCourse() : createNewCourse();
	};

	const handleEditCourse = (course) => {
		let item = courses.filter((item) => item.id === course.id ? item : false)[0];
		setEditedCourse(item);
	};

	const handleDeleteCourse = (course) => {
		setItemToDelete(() => course);
		handleShowModal();
	};

	const deleteCourse = () => {
		let tempCourses = courses.reduce((items, course) => {
			if (course !== itemToDelete) items.push(course);
			return items;
		}, []);
		setCourses(tempCourses);
		handleCloseModal();
		addToast('Course deleted', {appearance: 'warning'})
	};

	const handleLike = (course) => {
		let oldCourses = [...courses];
		let editedIndex = oldCourses.findIndex((e) => e.id === course.id);
		oldCourses[editedIndex].liked = !oldCourses[editedIndex].liked;
		setCourses(oldCourses);
		if (courses[editedIndex].liked === true) {
			addToast('the course is added to your favorites', {appearance: 'info'});
		} else {
			addToast('the course is removed from your favorites', {appearance: 'info'});
		}
	};

	const renderCoursesList = (tableLayout = null) => {
		if (courses.length === 0) return <h3>No Courses available</h3>;
		return (
			<CoursesList
				isTableLayout={tableLayout}
				handleLike={handleLike}
				courses={courses}
				onEdit={handleEditCourse}
				onDelete={handleDeleteCourse}/>
		);
	};

	function renderCoursesForm(tableLayout) {
		if(! tableLayout)
		return (

				<CoursesForm
					isTableLayout={tableLayout}
					authors={authors}
					course={editedCourse}
					handleLike={handleLike}
					onFormChange={handleFormChange}
					onFormSubmit={handleFormSubmit}
					handleReset={handleFormReset}
				/>

		);
	}

	return (
		<>
			<PromptModal toDelete={itemToDelete} handleConfirm={deleteCourse} handleClose={handleCloseModal}
			             show={showModal}/>

			<Row>
				{renderCoursesList(isTableLayout)}
				{renderCoursesForm(isTableLayout)}
			</Row>
		</>
	);
};

//validation with prop types
Courses.propTypes = {
	courses: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		authorId: PropTypes.number.isRequired,
		category: PropTypes.string.isRequired
	})).isRequired
};
// if the courses are undefined, the default value will be empty array
Courses.defaultProps = {
	courses: []
};

export default Courses;