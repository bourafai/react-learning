import React from "react";
import {Col, ListGroup, Row, Tab} from "react-bootstrap";
import CourseItem from "./CourseItem";
import CourseDetails from "./CourseDetails";

const CoursesList = (props) => {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {props.courses.map((value) => {
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
                        {props.courses.map((value) => {
                            let author = props.authors.find((o) => o.id === value.authorId);
                            return (
                                <CourseDetails
                                    key={value.id}
                                    id={value.id}
                                    author={author}
                                    title={value.title}
                                    description={value.description}
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