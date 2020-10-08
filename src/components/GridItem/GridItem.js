import React, { useContext } from 'react';
import { format, addWeeks, subDays } from 'date-fns';
import { PlannerContext } from '../../context/PlannerContext';
import s from './GridItem.module.css';
import UnitName from '../UnitName/UnitName';
import AddAssignment from '../AddAssignment/AddAssignment';

const GridItem = ({ id, unitColor, unitName, weekNumbers }) => {
	// Planner Context
	const {
		plannerColumns,
		plannerUnitStartDates,
		plannerUnitWeeks,
	} = useContext(PlannerContext);
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

	// Weeks
	// if id == 1 return start date + start Date + 1 week
	// else return start Date + indexWeeks = startDate + indexWeeks + 1 weeks

	const getWeek = () => {
		if (id / columns === 1) {
			const firstStartDate = format(new Date(plannerUnitStartDates), 'dd MMM');
			const weekEndSubtractOneDay = format(
				subDays(new Date(addWeeks(new Date(firstStartDate), 1)), 1),
				'dd MMM',
			);
			return `${firstStartDate} - ${weekEndSubtractOneDay}`;
		} else {
			const firstStartDate = format(
				addWeeks(new Date(plannerUnitStartDates), id / columns - 1),
				'dd MMM',
			);
			const weekEndSubtractOneDay = format(
				subDays(new Date(addWeeks(new Date(firstStartDate), 1)), 1),
				'dd MMM',
			);
			return `${firstStartDate} - ${weekEndSubtractOneDay}`;
		}
	};

	// const startDate = '2020-10-09';

	// const newDate = format(new Date(date), 'dd MMM');

	// addWeeks(new Date(2014, 8, 1), 4);
	const assignments = [4, 14];

	if (unitNamesKey.includes(id)) {
		return <UnitName unitColor={unitColor} unitName={unitName} />;
	} else if (unitDateKeys.includes(id)) {
		return <div>{`Week Date ${id / columns} ${getWeek()} `}</div>;
	} else if (assignments.includes(id)) {
		return <div>An assignment</div>;
	} else if (id === 0) {
		return <div id={s.grid_item}>Weeks</div>;
	} else {
		return <div>=</div>;
	}
};

export default GridItem;
