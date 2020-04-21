import React, {useEffect, useState} from "react";
import {getCourses} from "../../../api/courseApi";
import {getAuthors} from "../../../api/authorApi";
import {Col, ListGroup, Row, Tab} from "react-bootstrap";
import CourseItem from "./CourseItem";
import CourseDetail from "./CourseDetail";

const CoursesList = (props) => {
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
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {courses.map((value) => {
                            return (
                                <CourseItem
                                    title={value.title}
                                    key={value.id}
                                    id={value.id}
                                    cat={value.category}
                                />
                            );
                        })}
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        {courses.map((value) => {
                            let author = authors.find((o) => o.id === value.id);
                            // console.log(author);
                            return (
                                <CourseDetail
                                    key={value.id}
                                    id={value.id}
                                    author={author}
                                    title={value.title}
                                    description={value.title}
                                />
                            );
                        })}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default CoursesList;