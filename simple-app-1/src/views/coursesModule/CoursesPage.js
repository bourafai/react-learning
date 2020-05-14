import React, {useEffect, useState} from "react";

import {Button, ButtonGroup, Container, Jumbotron} from "react-bootstrap";
import Courses from "./components/Courses";
import {getCourses, saveCourse} from "../../api/courseApi";
import {getAuthors} from "../../api/authorApi";
import {ToastProvider} from "react-toast-notifications";
import {AiOutlineTable, AiOutlineUnorderedList} from "react-icons/ai";


const CoursesPage = () => {
	const coursesPerPage = 4;
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [isTableLayout, setTableLayout] = useState(true);

	//to avoid infinite loop :
	//declare a second argument : the dependency array
	//to tell useEffect when rerun
	//empty array means we want this to run once
	useEffect(() => {
		getCourses().then((_courses) => setCourses(_courses));
		getAuthors().then((_authors) => setAuthors(_authors));
	}, []);

	const handleTableLayout = (_isTableLayout) => {
		_isTableLayout ? setTableLayout(true) : setTableLayout(false);
	};

	return (
		<div>
			<Jumbotron className="d-flex justify-content-between">
				<h3>Courses Page <span className="badge badge-info">{courses.length}</span></h3>
				<div id="layout-buttons">
					<ButtonGroup aria-label="Page Layout" size="sm">
						<Button active={isTableLayout ? true: false} onClick={() => handleTableLayout(true)} variant="outline-secondary"><AiOutlineTable/></Button>
						<Button active={isTableLayout ? false: true} onClick={() => handleTableLayout(false)} variant="outline-secondary"><AiOutlineUnorderedList/></Button>
					</ButtonGroup>
				</div>
			</Jumbotron>

			<Container fluid="lg">
				<ToastProvider autoDismiss="true">
					<Courses
						coursesPerPage={coursesPerPage}
						isTableLayout={isTableLayout}
						addCourse={saveCourse}
						setCourses={setCourses}
						courses={courses}
						authors={authors}/>
				</ToastProvider>
			</Container>
		</div>
	);
};

export default CoursesPage;
