import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';

const DateInput = ({ label, name }) => {
	const { unitStartDateInput, setUnitStartDateInput } = useContext(
		InputContext,
	);
	return (
		<div className='inputContainer'>
			<label htmlFor=''>{label}</label>
			<input
				type='date'
				name={name}
				value={unitStartDateInput}
				onChange={(e) => setUnitStartDateInput(e.target.value)}
			/>
		</div>
	);
};

export default DateInput;
