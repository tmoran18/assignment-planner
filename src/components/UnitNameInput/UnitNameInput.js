import React, { useContext } from 'react';
import '../../global.css';
import { InputContext } from '../../context/InputContext';

const UnitNameInput = ({ label, placeHolder, name }) => {
	const { unitNameInput, setUnitNameInput } = useContext(InputContext);
	return (
		<div className='inputContainer'>
			<label htmlFor=''>{label}</label>
			<input
				type='text'
				placeholder={placeHolder}
				name={name}
				value={unitNameInput}
				onChange={(e) => setUnitNameInput(e.target.value)}
			/>
		</div>
	);
};

export default UnitNameInput;
