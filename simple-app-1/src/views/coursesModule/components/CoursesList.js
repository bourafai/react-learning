import React, {useState} from "react";
import {Col, ListGroup, Row, Tab} from "react-bootstrap";
import CourseItem from "./CourseItem";
import PropTypes from "prop-types";
import CoursesForm from "./CoursesForm";
import PromptModal from "./PromptModal";

const CoursesList = (props) => {


    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const onEdit = (e) => {
        console.log(e.target.parentElement);
        // handleForm();
    };

    const onDelete = (e) => {
        handleShow(true);
    };

    return (
        <>

            <PromptModal handleClose={handleClose} show={showModal}/>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {props.courses.map((value) => {
                                return (
                                    <CourseItem
                                        onEdit={onEdit}
                                        onDelete={onDelete}
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
                        <CoursesForm />
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

//validation with prop types
CoursesList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    })).isRequired
};
// if the courses are undefined, the default value will be empty array
CoursesList.defaultProps = {
    courses: []
};

export default CoursesList;