import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InputContext } from '../context/InputContext';
import { PlannerContext } from '../context/PlannerContext';
import { AppContext } from '../context/AppContext';
import TextInput from '../components/UnitNameInput';
import DateInput from '../components/DateInput';
import NumberOfWeeksInput from '../components/NumberOfWeeksInput';
import ColorPicker from '../components/ColorPicker';

const Form = () => {
	const [unitFormNumber, setUnitFormNumber] = useState(1);
	const router = useRouter();

	// App Contexts
	const { formCounter, setFormCounter } = useContext(AppContext);

	// Input Contexts
	const {
		unitNameInput,
		setUnitNameInput,
		unitStartDateInput,
		selectColorInput,
		setSelectColorInput,
		numberOfWeeksInput,
	} = useContext(InputContext);

	// Planner Contexts
	const {
		plannerUnitNames,
		setPlannerUnitNames,
		setPlannerUnitStartDates,
		plannerUnitColors,
		setPlannerUnitColors,
		setPlannerUnitWeeks,
	} = useContext(PlannerContext);

	// If the formCounter === 0 - show the planner
	useEffect(() => {
		!formCounter && router.push('/planner');
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
		<form onSubmit={handleFormSubmit}>
			<h2>{`Unit ${unitFormNumber} Details`}</h2>
			<div>
				<TextInput label='Unit Name' placeHolder='Unit Name' name='unitName' />
				<DateInput label='Unit Start Date' name='unitStartDate' />
				<NumberOfWeeksInput label='Unit Weeks' name='unitWeeks' />
				<ColorPicker />
				<button onClick={handleFormSubmit} type='submit' value='submit'>
					Save
				</button>
				<Link href='/units-count'>
					<button>Back</button>
				</Link>
			</div>
			<style jsx>
				{`
					form {
						padding: 20px;
						margin: 20px;
						max-width: 380px;
						display: flex;
						flex-direction: column;
						margin: auto;
					}

					form h2 {
						text-align: center;
						color: #5e5e5e;
					}
				`}
			</style>
		</form>
	);
};

export default Form;
