import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const CourseItem = (props) => {
    return (
        <ListGroup.Item key={props.id} href={"#" + props.id}>
            <div className="d-flex w-100 justify-content-between">
                <Link to={"/course/" + props.id}><h6 className="mb-1">{props.title}</h6></Link>
                <small>{props.cat}</small>
            </div>
        </ListGroup.Item>
    );
};

export default CourseItem;