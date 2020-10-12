import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';

const NumberOfWeeksInput = ({ label, placeHolder, name }) => {
	const { numberOfWeeksInput, setNumberOfWeeksInput } = useContext(
		InputContext,
	);
	return (
		<div className='inputContainer'>
			<label>{label}</label>
			<input
				type='number'
				placeholder={placeHolder}
				name={name}
				value={numberOfWeeksInput}
				onChange={(e) => setNumberOfWeeksInput(e.target.value)}
			/>
		</div>
	);
};

export default NumberOfWeeksInput;
