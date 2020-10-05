import React, { useContext, useEffect } from 'react';
import { InputContext } from '../../context/InputContext';
import { PlannerContext } from '../../context/PlannerContext';
import { AppContext } from '../../context/AppContext';
import TextInput from '../UnitNameInput/UnitNameInput';
import DateInput from '../DateInput/DateInput';
import ColorPicker from '../ColorPicker/ColorPicker';
import styles from '../Form/Form.module.css';

const Form = () => {
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
	} = useContext(InputContext);

	// Planner Contexts
	const {
		plannerUnitNames,
		setPlannerUnitNames,
		plannerUnitStartDates,
		setPlannerUnitStartDates,
		plannerUnitColors,
		setPlannerUnitColors,
	} = useContext(PlannerContext);

	// If the formCounter === 0 - show the planner
	useEffect(() => {
		if (!formCounter) {
			setShowUnitPlanner(true);
			setUnitDetails(false);
		}
	}, [formCounter]);

	const handleFormSubmit = (e) => {
		// Spread and set Unit names to State - reset field
		setPlannerUnitNames([...plannerUnitNames, unitNameInput]);
		setUnitNameInput('');
		// Spread and set Unit start dates to state - reset field
		setPlannerUnitStartDates([...plannerUnitStartDates, unitStartDateInput]);
		setUnitStartDateInput('');
		// Spread and set Unit colors to state - reset field
		setPlannerUnitColors([...plannerUnitColors, selectColorInput]);
		setSelectColorInput('');
		// Countdown for how many forms to show
		setFormCounter(formCounter - 1);
		e.preventDefault();
	};
	return (
		<form className={styles.form} onSubmit={handleFormSubmit}>
			<div>
				<TextInput
					label='Unit Title'
					placeHolder='Unit Title'
					name='unitTitle'
				/>
				<DateInput label='Unit Start Date' name='unitStartDate' />
				<ColorPicker />
			</div>
			<input type='submit' value='submit' />
		</form>
	);
};

export default Form;
