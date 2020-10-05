import React, { useContext } from 'react';
import styles from '../ColorPicker/ColorPicker.module.css';
import { InputContext } from '../../context/InputContext';

const ColorPicker = () => {
	const { selectColorInput, setSelectColorInput } = useContext(InputContext);

	const handleRadioChange = (e) => {
		setSelectColorInput(e.target.value);
	};

	return (
		<div id={styles.colorPicker_container}>
			<label className={styles.container}>
				<input
					value='blue'
					type='radio'
					onChange={handleRadioChange}
					checked={selectColorInput === 'blue'}
				/>
				<span className={`${styles.checkmark} ${styles.blue}`}></span>
			</label>
			<label className={styles.container}>
				<input
					value='green'
					type='radio'
					onChange={handleRadioChange}
					checked={selectColorInput === 'green' && 'checked'}
				/>
				<span className={`${styles.checkmark} ${styles.green}`}></span>
			</label>
			<label className={styles.container}>
				<input
					value='yellow'
					type='radio'
					onChange={handleRadioChange}
					checked={selectColorInput === 'yellow'}
				/>
				<span className={`${styles.checkmark} ${styles.yellow}`}></span>
			</label>
			<label className={styles.container}>
				<input
					value='red'
					type='radio'
					onChange={handleRadioChange}
					checked={selectColorInput === 'red'}
				/>
				<span className={`${styles.checkmark} ${styles.red}`}></span>
			</label>
		</div>
	);
};

export default ColorPicker;
