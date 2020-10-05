import React, { useContext } from 'react';
import { InputContext } from '../../context/InputContext';
import '../../global.css';

const NumberOfUnitsInput = ({ label, placeHolder, name }) => {
	const { numberOfUnitsInput, setNumberOfUnitsInput } = useContext(
		InputContext,
	);
	return (
		<div className='inputContainer'>
			<label htmlFor=''>{label}</label>
			<input
				type='number'
				placeholder={placeHolder}
				name={name}
				value={numberOfUnitsInput}
				onChange={(e) => setNumberOfUnitsInput(e.target.value)}
			/>
		</div>
	);
};

export default NumberOfUnitsInput;
