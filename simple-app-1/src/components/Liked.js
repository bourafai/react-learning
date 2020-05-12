import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Liked = ({onClick, course, size}) => {
	if (typeof course === 'undefined') {
		return (<span/>);
	} else {
		return (
			<span onClick={() => onClick(course)}>
			{course.liked === false ? <AiOutlineHeart size={size} style={{'cursor': 'pointer'}}/> :
				<AiFillHeart size={size} style={{'cursor': 'pointer'}}/>}
		</span>
		);
	}

};

Liked.propTypes = {};

export default Liked;