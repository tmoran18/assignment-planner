import React, { useContext, useState } from 'react';
import { format, addWeeks, subDays } from 'date-fns';
import { PlannerContext } from '../context/PlannerContext';
import { AssignmentContext } from '../context/AssignmentContext';
import UnitName from '../components/UnitName';
import style from './GridItem.module.css';
import Assignment from '../components/Assignment';
import AddAssignmentBtn from '../components/AddAssignmentBtn';

const GridItem = ({ id, unitColor, unitName }) => {
	// State to show add AssingmentBtn
	const [isShowing, setIsShowing] = useState(false);

	// Planner Context
	const {
		plannerColumns,
		plannerUnitStartDates,
		plannerUnitWeeks,
		plannerUnitColors,
	} = useContext(PlannerContext);

	// Add 1 to plannerColumns for mathematically rendering columns
	const columns = parseInt(plannerColumns) + 1;
	const rows = parseInt(plannerUnitWeeks) + 1;
	// Multiple columns * rows to get number of Grid items
	const gridItems = columns * rows;

	// Assignment Context
	const { assignments } = useContext(AssignmentContext);

	// UnitName Key Locations on Grid
	let unitNamesKey = [...Array(parseInt(plannerColumns))].map((item, index) => {
		return index + 1;
	});

	// Date Weeks key locations on Grid
	let unitDateKeys = [...Array(parseInt(plannerUnitWeeks + 1))].map(
		(item, index) => {
			return index * columns;
		},
	);

	// Remove the 0 index from array
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

	// Unit Color for Columns Key
	const getUnitColumnColor = (id) => {
		let column_1_color = [...Array(parseInt(gridItems))].map((item, index) => {
			return index * columns + 1;
		});
		let column_2_color = [...Array(parseInt(gridItems))].map((item, index) => {
			return index * columns + 2;
		});

		let column_3_color = [...Array(parseInt(gridItems))].map((item, index) => {
			return index * columns + 3;
		});

		let column_4_color = [...Array(parseInt(gridItems))].map((item, index) => {
			return index * columns + 4;
		});

		if (column_1_color.includes(id)) {
			return plannerUnitColors[0];
		} else if (column_2_color.includes(id)) {
			return plannerUnitColors[1];
		} else if (column_3_color.includes(id)) {
			return plannerUnitColors[2];
		} else if (column_4_color.includes(id)) {
			return plannerUnitColors[3];
		}
	};

	// Render Unit Names in Correct Positions
	if (unitNamesKey.includes(id)) {
		return (
			<UnitName
				className={style.grid_item}
				unitColor={unitColor}
				unitName={unitName}
			/>
		);
		// Render Unit Dates / Weeks in Correct Positions
	} else if (unitDateKeys.includes(id)) {
		return (
			<div className={`${style.grid_item} ${style.week}`}>
				<span style={{ fontWeight: '700', fontSize: '18px' }}>{`Week ${
					id / columns
				}`}</span>
				<span>{getWeek()}</span>
			</div>
		);
		// Render Assignments in Correct Positions when present
	} else if (assignments.hasOwnProperty(`key_${id}`)) {
		return (
			<div className={`${style.grid_item} ${style.assignment}`}>
				<Assignment
					name={assignments[`key_${id}`].name}
					type={assignments[`key_${id}`].type}
					dueDate={assignments[`key_${id}`].dueDate}
					length={assignments[`key_${id}`].length}
					bgColor={getUnitColumnColor(id)}
				/>
			</div>
		);
		// Render first cell with Weeks
	} else if (id === 0) {
		return (
			<div
				className={`${style.grid_item} ${style.week_header}`}
				style={{
					color: 'white',
					fontSize: '18px',
					background: '#333333',
					border: 'none',
				}}>
				Weeks
			</div>
		);
		// All other empty cells to show Add Assignment Button
	} else {
		return (
			<div
				onMouseEnter={() => setIsShowing(true)}
				onMouseLeave={() => setIsShowing(false)}
				className={`${style.grid_item} ${style.add_assignment}`}>
				{isShowing && <AddAssignmentBtn id={id} />}
			</div>
		);
	}
};

export default GridItem;
