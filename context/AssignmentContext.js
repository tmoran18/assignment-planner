import React, { useState, createContext } from 'react';

export const AssignmentContext = createContext();

export const AssignmentContextProvider = (props) => {
	const [showAssignmentModal, setShowAssignmentModal] = useState(false);
	const [assignments, setAssignments] = useState({});
	const [assignmentModalKeyLocation, setAssignmentModalKeyLocation] = useState(
		0,
	);
	return (
		<AssignmentContext.Provider
			value={{
				showAssignmentModal,
				setShowAssignmentModal,
				assignments,
				setAssignments,
				assignmentModalKeyLocation,
				setAssignmentModalKeyLocation,
			}}>
			{props.children}
		</AssignmentContext.Provider>
	);
};
export default AssignmentContextProvider;
