import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Liked = ({onClick, courseId, liked}) => {

	return (
		<span onClick={() => onClick(courseId)}>
			{liked === false ? <AiOutlineHeart size="1.5em" style={{'cursor': 'pointer'}}/> : <AiFillHeart size="1.5em" style={{'cursor': 'pointer'}}/>}
		</span>
	);
};

Liked.propTypes = {};

export default Liked;