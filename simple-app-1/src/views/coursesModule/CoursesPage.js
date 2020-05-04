import React, {useEffect, useState} from "react";

import {Container, Jumbotron} from "react-bootstrap";
import Courses from "./components/Courses";
import {getCourses, saveCourse} from "../../api/courseApi";
import {getAuthors} from "../../api/authorApi";
import {ToastProvider} from "react-toast-notifications";


const CoursesPage = () => {
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);

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
				<h3>Courses Page <span className="badge badge-info">{courses.length}</span></h3>
			</Jumbotron>

			<Container fluid="lg">
				<ToastProvider autoDismiss="true">
					<Courses addCourse={saveCourse} setCourses={setCourses} courses={courses} authors={authors}/>
				</ToastProvider>
			</Container>
		</div>
	);
};

export default CoursesPage;
