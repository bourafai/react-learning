import React from 'react';
import CourseDetails from "./components/CourseDetails";

const ManageCoursePage = (props) => {
    return (
        <div>
            manage course here
            {props.match.params.slug}
            <CourseDetails/>
        </div>
    );
};

export default ManageCoursePage;