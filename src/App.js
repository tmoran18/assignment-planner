import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { InputContext } from './context/InputContext';
import { PlannerContext } from './context/PlannerContext';
import NumberOfUnitsInput from './components/NumberOfUnitsInput/NumberOfUnitsInput';
import GridContainer from './components/GridContainer/GridContainer';

import Form from './components/Form/Form';
import './global.css';

function App() {
	// App context
	const {
		numberOfUnits,
		setNumberOfUnits,
		unitDetails,
		setUnitDetails,
		showUnitPlanner,
		setFormCounter,
	} = useContext(AppContext);

	// Input context
	const { numberOfUnitsInput, setNumberOfUnitsInput } = useContext(
		InputContext,
	);

	// Planner context
	const { setPlannerColumns } = useContext(PlannerContext);
	const saveNumOfUnits = () => {
		if (numberOfUnitsInput > 0) {
			setFormCounter(numberOfUnitsInput);
			setNumberOfUnits(false);
			setUnitDetails(true);
			setPlannerColumns(numberOfUnitsInput);
		} else {
			alert('Number of Units must be more than 0');
		}
	};

	// Show Number of Units Input
	if (numberOfUnits) {
		return (
			<div>
				<section
					style={{
						maxWidth: '500px',
						margin: '100px auto',
					}}>
					<NumberOfUnitsInput
						label='Choose Your Number of Units'
						name='numOfUnits'
					/>
					<button onClick={saveNumOfUnits}>Save</button>
				</section>
			</div>
		);
	}
	// Show Forms to fill out Unit details
	if (unitDetails) {
		return (
			<div>
				<Form />
			</div>
		);
	}
	// Show Unit Planner
	if (showUnitPlanner) {
		return <GridContainer />;
	}
}

export default App;
