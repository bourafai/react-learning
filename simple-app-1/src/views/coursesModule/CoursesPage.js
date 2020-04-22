import React, {useEffect, useState} from "react";

import {Container, Jumbotron} from "react-bootstrap";
import CoursesList from "./components/CoursesList";
import {getCourses} from "../../api/courseApi";
import {getAuthors} from "../../api/authorApi";


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
                <h3>Hello courses</h3>
            </Jumbotron>

            <Container>
                <CoursesList courses={courses} authors={authors}/>
            </Container>
        </div>
    );
};

export default CoursesPage;
