import React from 'react';
import '../../global.css';
import styles from './TextInput.module.css';

const TextInput = ({ label, placeHolder, name }) => {
	return (
		<div className='inputContainer'>
			<label htmlFor=''>{label}</label>
			<input type='text' placeholder={placeHolder} name={name} />
		</div>
	);
};

export default TextInput;
