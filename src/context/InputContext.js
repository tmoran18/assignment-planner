import React, { useState, createContext } from 'react';

export const InputContext = createContext();

export const InputContextProvider = (props) => {
	const [numberOfUnitsInput, setNumberOfUnitsInput] = useState(0);
	const [unitNameInput, setUnitNameInput] = useState('');
	const [unitStartDateInput, setUnitStartDateInput] = useState('');
	const [selectColorInput, setSelectColorInput] = useState('');

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
			}}>
			{props.children}
		</InputContext.Provider>
	);
};
export default InputContextProvider;
