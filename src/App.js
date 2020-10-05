import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { InputContext } from './context/InputContext';
import NumberOfUnitsInput from './components/NumberOfUnitsInput/NumberOfUnitsInput';

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

	const saveNumOfUnits = () => {
		if (numberOfUnitsInput > 0) {
			setFormCounter(numberOfUnitsInput);
			setNumberOfUnits(false);
			setUnitDetails(true);
		} else {
			alert('Number of Units must be more than 0');
		}
	};

	// If number of units true - show Number of Units Input
	if (numberOfUnits) {
		return (
			<div>
				<section>
					<NumberOfUnitsInput label='Number of Units' name='numOfUnits' />
					<button onClick={saveNumOfUnits}>Save</button>
				</section>
			</div>
		);
	}
	if (unitDetails) {
		return (
			<div>
				<Form />
			</div>
		);
	}
	if (showUnitPlanner) {
		return <div>PLanners</div>;
	}
}

export default App;

// TODO's
// Creating a grid with indexed IDS based off state

// Components:
// Grid Container is the parent
// will create grid items by mapping state
