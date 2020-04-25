import React, {useEffect, useState} from "react";

import {Container, Jumbotron} from "react-bootstrap";
import Courses from "./components/Courses";
import {getCourses,saveCourse} from "../../api/courseApi";
import {getAuthors} from "../../api/authorApi";


const CoursesPage = () => {
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);

	const addCourse = (course) => {
		saveCourse(course).then((_course) => {
			const oldCourses = [_course, ...courses];
			setCourses(oldCourses);
		});
	};
	//to avoid infinite loop :
	//declare a second argument : the dependency array
	//to tell useEffect when rerun
	//empty array means we want this to run once
	useEffect(() => {
		getCourses().then((_courses) => setCourses(_courses));
		getAuthors().then((_authors) => setAuthors(_authors));
	}, []);


	return (
		<div>
			<Jumbotron className="d-flex justify-content-between">
				<h3>Hello courses</h3>
			</Jumbotron>

			<Container fluid="lg">
				<Courses addCourse={addCourse} courses={courses} authors={authors}/>
			</Container>
		</div>
	);
};

export default CoursesPage;
