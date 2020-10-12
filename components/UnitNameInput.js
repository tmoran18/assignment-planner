import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';

const UnitNameInput = () => {
	const { unitNameInput, setUnitNameInput } = useContext(InputContext);
	return (
		<div className='inputContainer'>
			<label>Unit Name</label>
			<input
				type='text'
				placeholder='Unit Name'
				name='unitName'
				value={unitNameInput}
				onChange={(e) => setUnitNameInput(e.target.value)}
			/>
		</div>
	);
};

export default UnitNameInput;
