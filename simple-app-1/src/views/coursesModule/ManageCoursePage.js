import React from 'react';

const ManageCoursePage = (props) => {
	return (
		<div>
			manage course here
			{props.match.params.slug}
			{/*<CourseDetails/>*/}
		</div>
	);
};

export default ManageCoursePage;