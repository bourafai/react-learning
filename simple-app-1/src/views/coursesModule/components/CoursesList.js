import React, {useState} from 'react';
import CourseItem from "./CourseItem";
import {ListGroup} from "react-bootstrap";
import PromptModal from "./PromptModal";

const CoursesList = (props) => {
	console.log(props.courses);
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	return (
		<>
			<PromptModal handleClose={handleClose} show={showModal}/>
			<ListGroup className="shadow">
				{props.courses.map((value) => {
					return (
						<CourseItem
							onEdit={props.onEdit}
							onDelete={props.onDelete}
							title={value.title}
							key={value.id}
							id={value.id}
							cat={value.category}
						/>
					);
				})}
			</ListGroup>
		</>
	);
};

export default CoursesList;