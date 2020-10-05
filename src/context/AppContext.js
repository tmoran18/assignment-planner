import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
	const [numberOfUnits, setNumberOfUnits] = useState(true);
	const [unitDetails, setUnitDetails] = useState(false);
	const [showUnitPlanner, setShowUnitPlanner] = useState(false);
	const [formCounter, setFormCounter] = useState(0);
	return (
		<AppContext.Provider
			value={{
				numberOfUnits,
				setNumberOfUnits,
				unitDetails,
				setUnitDetails,
				showUnitPlanner,
				setShowUnitPlanner,
				formCounter,
				setFormCounter,
			}}>
			{props.children}
		</AppContext.Provider>
	);
};
export default AppContextProvider;
