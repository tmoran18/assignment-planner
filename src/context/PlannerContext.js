import React, { useState, createContext } from 'react';

export const PlannerContext = createContext();

export const PlannerContextProvider = (props) => {
	const [plannerUnitNames, setPlannerUnitNames] = useState([]);
	const [plannerUnitStartDates, setPlannerUnitStartDates] = useState('');
	const [plannerUnitWeeks, setPlannerUnitWeeks] = useState([]);
	const [plannerUnitColors, setPlannerUnitColors] = useState([]);
	return (
		<PlannerContext.Provider
			value={{
				plannerUnitNames,
				setPlannerUnitNames,
				plannerUnitStartDates,
				setPlannerUnitStartDates,
				plannerUnitColors,
				setPlannerUnitColors,
				plannerUnitWeeks,
				setPlannerUnitWeeks,
			}}>
			{props.children}
		</PlannerContext.Provider>
	);
};
export default PlannerContextProvider;
