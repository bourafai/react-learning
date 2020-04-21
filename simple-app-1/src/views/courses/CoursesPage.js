import React from "react";

import {Container, Jumbotron} from "react-bootstrap";
import CoursesList from "./components/CoursesList";

const CoursesPage = () => {
    return (
        <div>
            <Jumbotron>
                <h3>Hello courses</h3>
            </Jumbotron>

            <Container>
                <CoursesList/>
            </Container>
        </div>
    );
};

export default CoursesPage;
