import React, { useContext, useState } from 'react';
import { format, addWeeks, subDays } from 'date-fns';
import { PlannerContext } from '../context/PlannerContext';
import UnitName from '../components/UnitName';
import style from './GridItem.module.css';
import Assignment from '../components/Assignment';
import AddAssignmentBtn from '../components/AddAssignmentBtn';
import AddAssignmentModal from '../components/AddAssignmentModal';

const GridItem = ({ id, unitColor, unitName, weekNumbers }) => {
	const [isShowing, setIsShowing] = useState(false);
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

	// Get the dates for the Weeks
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

	const assignments = [4, 14];

	if (unitNamesKey.includes(id)) {
		return (
			<UnitName
				className={style.grid_item}
				unitColor={unitColor}
				unitName={unitName}
			/>
		);
	} else if (unitDateKeys.includes(id)) {
		return (
			<div className={`${style.grid_item} ${style.week}`}>
				<span>{`Week ${id / columns}`}</span>
				<span>{getWeek()}</span>
			</div>
		);
	} else if (assignments.includes(id)) {
		return (
			<div className={`${style.grid_item} ${style.assignment}`}>
				<Assignment />
			</div>
		);
	} else if (id === 0) {
		return (
			<div
				className={`${style.grid_item} ${style.week_header}`}
				style={{ border: '2px solid #333' }}>
				Weeks
			</div>
		);
	} else {
		return (
			<div
				onMouseEnter={() => setIsShowing(true)}
				onMouseLeave={() => setIsShowing(false)}
				className={`${style.grid_item} ${style.add_assignment}`}>
				{isShowing && <AddAssignmentBtn />}
			</div>
		);
	}
};

export default GridItem;
