import React, { useState, createContext } from 'react';

export const AssignmentContext = createContext();

export const AssignmentContextProvider = (props) => {
	const [showAssignmentModal, setShowAssignmentModal] = useState(false);
	return (
		<AssignmentContext.Provider
			value={{
				showAssignmentModal,
				setShowAssignmentModal,
			}}>
			{props.children}
		</AssignmentContext.Provider>
	);
};
export default AssignmentContextProvider;
