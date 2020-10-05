import React, { useContext, useEffect, useState } from 'react';
import { InputContext } from '../../context/InputContext';
import { PlannerContext } from '../../context/PlannerContext';
import { AppContext } from '../../context/AppContext';
import TextInput from '../UnitNameInput/UnitNameInput';
import DateInput from '../DateInput/DateInput';
import NumberOfWeeksInput from '../NumberOfWeeksInput/NumberOfWeeksInput';
import ColorPicker from '../ColorPicker/ColorPicker';
import styles from '../Form/Form.module.css';

const Form = () => {
	const [unitFormNumber, setUnitFormNumber] = useState(1);
	// App Contexts
	const {
		formCounter,
		setFormCounter,
		setUnitDetails,
		setShowUnitPlanner,
	} = useContext(AppContext);

	// Input Contexts
	const {
		unitNameInput,
		setUnitNameInput,
		unitStartDateInput,
		setUnitStartDateInput,
		selectColorInput,
		setSelectColorInput,
		numberOfWeeksInput,
		setNumberOfWeeksInput,
	} = useContext(InputContext);

	// Planner Contexts
	const {
		plannerUnitNames,
		setPlannerUnitNames,
		plannerUnitStartDates,
		setPlannerUnitStartDates,
		plannerUnitColors,
		setPlannerUnitColors,
		plannerUnitWeeks,
		setPlannerUnitWeeks,
	} = useContext(PlannerContext);

	// If the formCounter === 0 - show the planner
	useEffect(() => {
		if (!formCounter) {
			setShowUnitPlanner(true);
			setUnitDetails(false);
		}
	}, [formCounter]);

	const handleFormSubmit = (e) => {
		if (!unitNameInput) {
			alert('Unit Name Cannot be Empty');
			e.preventDefault();
		} else if (!unitStartDateInput) {
			alert('Unit Start Date Cannot be Empty');
			e.preventDefault();
		} else {
			// Spread and set Unit names to State - reset field
			setPlannerUnitNames([...plannerUnitNames, unitNameInput]);
			setUnitNameInput('');
			// Set Unit start dates to state
			setPlannerUnitStartDates(unitStartDateInput);
			// Spread and set Unit colors to state - reset field
			setPlannerUnitColors([...plannerUnitColors, selectColorInput]);
			setSelectColorInput('');
			// Set Unit Weeks to state
			setPlannerUnitWeeks(numberOfWeeksInput);
			// Countdown for how many forms to show
			setFormCounter(formCounter - 1);
			setUnitFormNumber(unitFormNumber + 1);
			e.preventDefault();
		}
	};
	return (
		<form className={styles.form} onSubmit={handleFormSubmit}>
			<h2>{`Unit ${unitFormNumber} Details`}</h2>
			<div>
				<TextInput label='Unit Name' placeHolder='Unit Name' name='unitName' />
				<DateInput label='Unit Start Date' name='unitStartDate' />
				<NumberOfWeeksInput label='Unit Weeks' name='unitWeeks' />
				<ColorPicker />
				<button type='submit' value='submit'>
					Save
				</button>
			</div>
		</form>
	);
};

export default Form;
