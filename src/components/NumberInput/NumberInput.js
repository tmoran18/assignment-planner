import React from 'react';
import '../../global.css';
import styles from './NumberInput.module.css';

const NumberInput = ({ label, placeHolder, name }) => {
	return (
		<div className='inputContainer'>
			<label htmlFor=''>{label}</label>
			<input type='number' placeholder={placeHolder} name={name} />
		</div>
	);
};

export default NumberInput;
