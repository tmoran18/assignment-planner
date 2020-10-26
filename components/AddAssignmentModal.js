import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';
import { AssignmentContext } from '../context/AssignmentContext';
import Button from '../components/Button';

const AddAssignmentModal = () => {
	// Input Context
	const {
		assignmentNameInput,
		setAssignmentNameInput,
		assignmentTypeInput,
		setAssignmentTypeInput,
		assignmentDueDateInput,
		setAssignmentDueDateInput,
		assignmentLengthInput,
		setAssignmentLengthInput,
	} = useContext(InputContext);

	// Assignment Context
	const {
		assignments,
		setAssignments,
		showAssignmentModal,
		setShowAssignmentModal,
		assignmentModalKeyLocation,
	} = useContext(AssignmentContext);

	// Add assignments to current state
	const addAssignment = (e) => {
		if (!assignmentNameInput) {
			alert('Assignment Name Cannot be Empty');
			e.preventDefault();
		} else if (!assignmentDueDateInput) {
			alert('Assignment Due Date Cannot be Empty');
			e.preventDefault();
		} else {
			e.preventDefault();
			setAssignments({
				...assignments,
				[`key_${assignmentModalKeyLocation}`]: {
					name: assignmentNameInput,
					type: assignmentTypeInput,
					dueDate: assignmentDueDateInput,
					length: assignmentLengthInput,
				},
			});
			// Reset Inputs
			closeAssignmentModal();
		}
	};

	const closeAssignmentModal = () => {
		setAssignmentNameInput('');
		setAssignmentTypeInput('');
		setAssignmentDueDateInput('');
		setAssignmentLengthInput('');
		setShowAssignmentModal(false);
	};

	return (
		<div className={showAssignmentModal}>
			<form className='flex-col'>
				<img
					onClick={closeAssignmentModal}
					className='close_icon'
					src='/close.svg'
					alt='close X icon'
				/>
				<h2>Add New Assignment</h2>
				<label>Name</label>
				<input
					onChange={(e) => setAssignmentNameInput(e.target.value)}
					type='text'
					placeholder='Assignment 1 - Design Report...'
				/>
				<label>Type</label>
				<input
					onChange={(e) => setAssignmentTypeInput(e.target.value)}
					type='text'
					placeholder='Report...'
				/>
				<label>Length / Weight</label>
				<input
					onChange={(e) => setAssignmentLengthInput(e.target.value)}
					type='text'
					placeholder='2500 Words - 25%...'
				/>
				<label>Due Date</label>
				<input
					onChange={(e) => setAssignmentDueDateInput(e.target.value)}
					type='date'
				/>
				<div id='btn_container'>
					<Button onClick={addAssignment}>Save</Button>
				</div>
			</form>
			<style jsx>{`
				h2 {
					text-align: center;
					width: 100%;
					margin: -30px 0 30px 0;
				}
				div {
					width: 100vw;
					height: 100vh;
					background: #ffffffba;
					position: absolute;
					margin: auto;
					left: 0;
					right: 0;
				}
				form {
					display: flex;
					flex-direction: column;
					max-width: 460px;
					margin: 200px auto;
					background: #f6f9fc;
					border: 1px solid #ccc;
					padding: 60px 80px;
					border-radius: 4px;
					text-align: center;
					box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1),
						0 10px 10px rgba(0, 0, 0, 0.1);
					position: relative;
				}
				label {
					font-size: 14px;
					padding: 0;
					margin-bottom: -7px;
					color: #666;
				}
				::placeholder {
					color: #ccc;
				}
				input[type='date'] {
					color: #ccc;
				}
				.close_icon {
					position: absolute;
					top: 10px;
					right: 10px;
					cursor: pointer;
				}
				#btn_container {
					height: auto;
					width: 100%;
					background: none;
					bottom: 20px;
				}
				@media only screen and (max-width: 800px) {
					form {
						width: 95%;
						max-width: 380px;
						margin: 50px auto;
						padding: 60px 40px;
					}
				}
			`}</style>
		</div>
	);
};

export default AddAssignmentModal;
