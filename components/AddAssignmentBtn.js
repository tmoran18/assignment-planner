import React, { useContext } from 'react';
import { AssignmentContext } from '../context/AssignmentContext';

const AddAssignmentBtn = ({ id }) => {
	const { setShowAssignmentModal, setAssignmentModalKeyLocation } = useContext(
		AssignmentContext,
	);
	return (
		<div
			onClick={() => {
				setShowAssignmentModal(true);
				setAssignmentModalKeyLocation(id);
			}}>
			<svg
				width='30'
				height='30'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
					fill='#B4B4B4'
				/>
			</svg>
			<style jsx>{`
				svg {
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export default AddAssignmentBtn;
