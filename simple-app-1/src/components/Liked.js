import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Liked = ({onClick, courseId, liked, size}) => {
	if (typeof courseId === 'undefined') {
		return (<span/>);
	} else {
		return (
			<span onClick={() => onClick(courseId)}>
			{liked === false ? <AiOutlineHeart size={size} style={{'cursor': 'pointer'}}/> :
				<AiFillHeart size={size} style={{'cursor': 'pointer'}}/>}
		</span>
		);
	}

};

Liked.propTypes = {};

export default Liked;