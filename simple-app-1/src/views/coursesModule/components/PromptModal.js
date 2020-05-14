import React from 'react';
import Modal from "react-bootstrap/esm/Modal";
import {Button} from "react-bootstrap";

const PromptModal = ({handleClose,show,handleConfirm}) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Are You sure You want to delete ?</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleConfirm}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default PromptModal;