import React from 'react';
import {Tab} from "react-bootstrap";

const CourseDetails = (props) => {
    return (
        <Tab.Pane key="0" eventKey={"#" + props.id}>
            <h4>{props.title}</h4>
            <br/>
            <small>{(typeof props.author !== 'undefined') ?
                <p className="small mb-1">{props.author.name}</p> : ''}</small>
            <p>{props.description}</p>
        </Tab.Pane>
    );
};

export default CourseDetails;