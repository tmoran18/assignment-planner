import React from 'react';
import s from './GridItem.module.css';
import UnitName from '../UnitName/UnitName';
import AddAssignment from '../AddAssignment/AddAssignment';

const GridItem = ({ id }) => {
	// UnitName = +1 iterate over x columns
	const unitNames = [1, 2];
	const dateWeeks = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33];
	const assignments = [4, 14];

	if (unitNames.includes(id)) {
		return <UnitName />;
	} else if (dateWeeks.includes(id)) {
		return <div>Week Date</div>;
	} else if (assignments.includes(id)) {
		return <div>An assignment</div>;
	} else {
		return <div id={s.grid_item}>+</div>;
	}
};

export default GridItem;
