import React, { useState, createContext } from 'react';

export const PlannerContext = createContext();

export const PlannerContextProvider = (props) => {
	const [plannerUnitNames, setPlannerUnitNames] = useState([]);
	const [plannerUnitStartDates, setPlannerUnitStartDates] = useState('');
	const [plannerUnitWeeks, setPlannerUnitWeeks] = useState(0);
	const [plannerUnitColors, setPlannerUnitColors] = useState([]);
	const [plannerColumns, setPlannerColumns] = useState(0);
	const [plannerOpaque, setPlannerOpaque] = useState(false);
	const [showAssignmentModal, setShowAssignmentModal] = useState(false);
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
				plannerColumns,
				setPlannerColumns,
				plannerOpaque,
				setPlannerOpaque,
				showAssignmentModal,
				setShowAssignmentModal,
			}}>
			{props.children}
		</PlannerContext.Provider>
	);
};
export default PlannerContextProvider;