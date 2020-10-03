import React from 'react';
import NumberInput from '../components/NumberInput/NumberInput';
import TextInput from '../components/TextInput/TextInput';
import '../global.css';

function App() {
	return (
		<div className='App'>
			<p></p>
			<NumberInput label='Number of Units' placeHolder='0' name='numOfUnits' />
			<TextInput label='Unit Title' placeHolder='Unit Title' name='unitTitle' />
		</div>
	);
}

export default App;

// TODO's
// Creating a grid with indexed IDS based off state

// Components:
// Grid Container is the parent
// will create grid items by mapping state
