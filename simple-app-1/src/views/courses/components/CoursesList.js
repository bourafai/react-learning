import React, {useEffect, useState} from "react";
import {getCourses} from "../../../api/courseApi";
import {getAuthors} from "../../../api/authorApi";
import {Col, ListGroup, Row, Tab} from "react-bootstrap";

const CoursesList = (props) => {
    const [courses, setCourses] = useState([]);
    const [authors, setAuthors] = useState([]);


    //to avoid infinite loop :
    //declare a second argument : the dependency array
    //to tell useEffect when rerun
    //empty array means we want this to run once
    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
        getAuthors().then(_authors => setAuthors(_authors));
    }, []);

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {courses.map((value) => {
                            return (
                                <ListGroup.Item key={value.id} href={"#" + value.id}>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">{value.title}</h6>
                                        <small>{value.category}</small>
                                    </div>
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        {courses.map((value) => {
                            let author = authors.find(o => o.id === value.id);
                            return (
                                <Tab.Pane key={value.id} eventKey={"#" + value.id}>
                                    <h4>{value.title}</h4>
                                    <br/>
                                    <small>{(typeof author !== 'undefined') ?
                                        <p className="small mb-1">{author.name}</p> : ''}</small>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                                        animi atque culpa cumque distinctio enim excepturi facere ipsam iste
                                        laboriosam modi molestiae, necessitatibus, perspiciatis placeat
                                        saepe. Aspernatur consequatur omnis provident.</p>
                                </Tab.Pane>
                            );
                        })}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default CoursesList;