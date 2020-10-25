import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InputContext } from '../context/InputContext';
import { PlannerContext } from '../context/PlannerContext';
import { AppContext } from '../context/AppContext';
import TextInput from '../components/UnitNameInput';
import DateInput from '../components/DateInput';
import NumberOfWeeksInput from '../components/NumberOfWeeksInput';
import ColorPicker from '../components/ColorPicker';
import Button from '../components/Button';

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
			// If the formcounter = unit form number route to planner, else show the unit number
			formCounter == unitFormNumber
				? router.push('/planner')
				: setUnitFormNumber(unitFormNumber + 1);
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
				<div className='btn_container'>
					<Button onClick={handleFormSubmit} type='submit' value='submit'>
						Save
					</Button>
					<Link href='/units-count'>
						<Button style='inverse'>Back</Button>
					</Link>
				</div>
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
					.btn_container {
						display: flex;
						justify-content: space-between;
					}
				`}
			</style>
		</form>
	);
};

export default Form;
