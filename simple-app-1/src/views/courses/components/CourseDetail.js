import React from 'react';
import {Tab} from "react-bootstrap";

const CourseDetail = (props) => {
    return (
        <Tab.Pane key={props.id} eventKey={"#" + props.id}>
            <h4>{props.title}</h4>
            <br/>
            <small>{(typeof props.author !== 'undefined') ?
                <p className="small mb-1">{props.author.name}</p> : ''}</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                animi atque culpa cumque distinctio enim excepturi facere ipsam iste
                laboriosam modi molestiae, necessitatibus, perspiciatis placeat
                saepe. Aspernatur consequatur omnis provident.</p>
        </Tab.Pane>
    );
};

export default CourseDetail;