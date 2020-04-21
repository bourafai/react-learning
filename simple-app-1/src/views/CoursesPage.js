import React, {Component} from "react";
import {getCourses} from "../api/courseApi";
import {getAuthors} from "../api/authorApi";
import {Container, ListGroup, Tab, Col, Row, Jumbotron} from "react-bootstrap";

class CoursesList extends Component {
    state = {
        courses: [],
        authors: [],
    };

    componentDidMount() {
        getCourses().then(value => this.setState({courses: value}));
        getAuthors().then(value => this.setState({authors: value}));
    }

    render() {
        return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {this.state.courses.map((value) => {


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
                            {this.state.courses.map((value) => {
                                let author = this.state.authors.find(o => o.id === value.id);
                                return (
                                    <Tab.Pane key={value.id} eventKey={"#" + value.id}>
                                        {value.title}
                                        <br/>
                                        <small>{(typeof author !=='undefined') ? <p className="small mb-1">{author.name}</p>: ''}</small>
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
    }
}

class CoursesPage extends Component {

    render() {
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
    }
}

export default CoursesPage;
