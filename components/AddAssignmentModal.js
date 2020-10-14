import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';
import { AssignmentContext } from '../context/AssignmentContext';

const AddAssignmentModal = () => {
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

	const {
		assignments,
		setAssignments,
		showAssignmentModal,
		setShowAssignmentModal,
		assignmentModalKeyLocation,
	} = useContext(AssignmentContext);

	const addAssignment = (e) => {
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
		setAssignmentNameInput('');
		setAssignmentTypeInput('');
		setAssignmentDueDateInput('');
		setAssignmentLengthInput('');

		setShowAssignmentModal(false);
	};
	return (
		<div className={showAssignmentModal}>
			<form className='flex-col'>
				<input
					onChange={(e) => setAssignmentNameInput(e.target.value)}
					type='text'
					placeholder='Assignment Name'
				/>
				<input
					onChange={(e) => setAssignmentTypeInput(e.target.value)}
					type='text'
					placeholder='Assingment Type'
				/>
				<input
					onChange={(e) => setAssignmentDueDateInput(e.target.value)}
					type='date'
				/>
				<input
					onChange={(e) => setAssignmentLengthInput(e.target.value)}
					type='text'
					placeholder='length'
				/>
				<button onClick={addAssignment}>Save</button>
			</form>
			<style jsx>{`
				div {
					height: 20px;
					width: 100%;
					display: flex;
					justify-content: center;
					z-index: 2;
				}
				form {
					position: absolute;
					margin: auto;
					top: 200px;
					background: #e5e5e5;
					padding: 120px;
					border-radius: 4px;
					text-align: center;
				}
				.hide {
					display: none;
				}
				.show {
					display: block;
				}
			`}</style>
		</div>
	);
};

export default AddAssignmentModal;
