import React, { useState, createContext } from 'react';

export const InputContext = createContext();

export const InputContextProvider = (props) => {
	const [numberOfUnitsInput, setNumberOfUnitsInput] = useState(0);
	const [unitNameInput, setUnitNameInput] = useState('');
	const [unitStartDateInput, setUnitStartDateInput] = useState('');
	const [numberOfWeeksInput, setNumberOfWeeksInput] = useState(12);
	const [selectColorInput, setSelectColorInput] = useState('');
	const [assignmentNameInput, setAssignmentNameInput] = useState('');
	const [assignmentTypeInput, setAssignmentTypeInput] = useState('');
	const [assignmentDueDateInput, setAssignmentDueDateInput] = useState('');
	const [assignmentLengthInput, setAssignmentLengthInput] = useState('');

	return (
		<InputContext.Provider
			value={{
				numberOfUnitsInput,
				setNumberOfUnitsInput,
				unitNameInput,
				setUnitNameInput,
				unitStartDateInput,
				setUnitStartDateInput,
				selectColorInput,
				setSelectColorInput,
				numberOfWeeksInput,
				setNumberOfWeeksInput,
				assignmentNameInput,
				setAssignmentNameInput,
				assignmentTypeInput,
				setAssignmentTypeInput,
				assignmentDueDateInput,
				setAssignmentDueDateInput,
				assignmentLengthInput,
				setAssignmentLengthInput,
			}}>
			{props.children}
		</InputContext.Provider>
	);
};
export default InputContextProvider;
