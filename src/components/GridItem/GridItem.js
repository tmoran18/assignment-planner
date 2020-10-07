import React, { useContext } from 'react';
import { PlannerContext } from '../../context/PlannerContext';
import s from './GridItem.module.css';
import UnitName from '../UnitName/UnitName';
import AddAssignment from '../AddAssignment/AddAssignment';

const GridItem = ({ id, unitColor, unitName }) => {
	// Planner Context
	const { plannerColumns, plannerUnitWeeks } = useContext(PlannerContext);
	const columns = parseInt(plannerColumns) + 1;

	// UnitName Key Locations on Grid
	let unitNamesKey = [...Array(parseInt(plannerColumns))].map((item, index) => {
		return index + 1;
	});

	// Date Weeks key locations on Grid
	let unitDateKeys = [...Array(plannerUnitWeeks + 1)].map((item, index) => {
		return index * columns;
	});
	// Remove the 0 from array
	unitDateKeys.shift();

	// Add a number every plannerColumns

	const assignments = [4, 14];

	if (unitNamesKey.includes(id)) {
		return <UnitName unitColor={unitColor} unitName={unitName} />;
	} else if (unitDateKeys.includes(id)) {
		return <div>{`Week Date${id}`}</div>;
	} else if (assignments.includes(id)) {
		return <div>An assignment</div>;
	} else if (id === 0) {
		return <div id={s.grid_item}>Weeks</div>;
	} else {
		return <div>=</div>;
	}
};

export default GridItem;
