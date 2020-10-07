import React, { useState, useContext } from 'react';
import { PlannerContext } from '../../context/PlannerContext';
import { AppContext } from '../../context/AppContext';
import GridItem from '../GridItem/GridItem';
import UnitName from '../UnitName/UnitName';
import s from './GrdiContainer.module.css';

const GridContainer = () => {
	const { plannerColumns } = useContext(PlannerContext);
	const { plannerUnitWeeks } = useContext(PlannerContext);
	const { plannerUnitColors, plannerUnitNames } = useContext(PlannerContext);

	const columns = parseInt(plannerColumns) + 1;
	const rows = parseInt(plannerUnitWeeks) + 1;
	const gridItems = columns * rows;

	return (
		<div
			id={s.grid_container}
			style={{
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
			}}>
			{[...Array(gridItems)].map((item, index) => (
				<GridItem
					className={s.gridItem}
					id={index}
					key={index}
					// Skip first cell - bring index back into Sync
					unitName={index !== 0 && plannerUnitNames[index - 1]}
					// Skip first cell - bring index back into Sync
					unitColor={index !== 0 && plannerUnitColors[index - 1]}></GridItem>
			))}
		</div>
	);
};

export default GridContainer;
