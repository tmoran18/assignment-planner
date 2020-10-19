import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';

const ColorPicker = () => {
	const { selectColorInput, setSelectColorInput } = useContext(InputContext);

	const handleRadioChange = (e) => {
		setSelectColorInput(e.target.value);
	};

	return (
		<div>
			<label>Unit Color</label>
			<div id='colorPicker_container'>
				<label className='container'>
					<input
						value='blue'
						type='radio'
						onChange={handleRadioChange}
						checked={selectColorInput === 'blue'}
					/>
					<span className='checkmark blue'></span>
				</label>
				<label className='container'>
					<input
						value='green'
						type='radio'
						onChange={handleRadioChange}
						checked={selectColorInput === 'green' && 'checked'}
					/>
					<span className='checkmark green'></span>
				</label>
				<label className='container'>
					<input
						value='purple'
						type='radio'
						onChange={handleRadioChange}
						checked={selectColorInput === 'purple'}
					/>
					<span className='checkmark purple'></span>
				</label>
				<label className='container'>
					<input
						value='red'
						type='radio'
						onChange={handleRadioChange}
						checked={selectColorInput === 'red'}
					/>
					<span className='checkmark red'></span>
				</label>
			</div>
			<style jsx>
				{`
					#colorPicker_container {
						display: flex;
						max-width: 200px;
					}

					.colorBox {
						width: 20px;
						height: 20px;
						border: 1px solid #e1e1e9;
						margin-right: 10px;
						margin-top: 10px;
						border-radius: 3px;
						cursor: pointer;
					}

					.blue {
						background-color: dodgerblue;
					}

					.green {
						background-color: #74e39a;
					}

					.purple {
						background-color: #b985ff;
					}

					.red {
						background-color: #ff5c57;
					}

					.active {
						transform: scale(1.4);
					}

					.container {
						display: block;
						position: relative;
						padding-left: 35px;
						margin: 10px 0px;
						cursor: pointer;
						font-size: 22px;
						-webkit-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
						min-height: 30px;
					}

					/* Hide the browser's default checkbox */
					.container input {
						position: absolute;
						opacity: 0;
						cursor: pointer;
						height: 0;
						width: 0;
					}

					/* Create a custom checkbox */
					.checkmark {
						position: absolute;
						top: 0;
						left: 0;
						height: 25px;
						width: 25px;
						border: 1px solid #e1e1e9;
						border-radius: 4px;
					}

					/* On mouse-over, add a grey background color */

					/* Create the checkmark/indicator (hidden when not checked) */
					.checkmark:after {
						content: '';
						position: absolute;
						display: none;
					}

					/* Show the checkmark when checked */
					.container input:checked ~ .checkmark:after {
						display: block;
					}

					/* Style the checkmark/indicator */
					.container .checkmark:after {
						left: 9px;
						top: 5px;
						width: 5px;
						height: 10px;
						border: solid black;
						border-width: 0 3px 3px 0;
						-webkit-transform: rotate(45deg);
						-ms-transform: rotate(45deg);
						transform: rotate(45deg);
					}
				`}
			</style>
		</div>
	);
};

export default ColorPicker;
