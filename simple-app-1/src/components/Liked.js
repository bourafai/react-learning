import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Liked = ({onClick, course, size}) => {
	if (typeof course === 'undefined' || typeof course.id === 'undefined') {
		return (<span/>);
	} else {
		const Heart = (course.liked === false ? AiOutlineHeart : AiFillHeart);
		return (
			<span onClick={() => onClick(course)}>
				<Heart size={size} style={{'cursor': 'pointer'}}/>
		</span>
		);
	}

};

Liked.propTypes = {
	course: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.string
};

export default Liked;