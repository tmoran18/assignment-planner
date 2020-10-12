import React, { useContext } from 'react';
import { PlannerContext } from '../context/PlannerContext';
import GridItem from '../components/GridItem';

const GridContainer = () => {
	const { plannerColumns } = useContext(PlannerContext);
	const { plannerUnitWeeks } = useContext(PlannerContext);
	const { plannerUnitColors, plannerUnitNames, plannerOpaque } = useContext(
		PlannerContext,
	);

	const columns = parseInt(plannerColumns) + 1;
	const rows = parseInt(plannerUnitWeeks) + 1;
	const gridItems = columns * rows;

	return (
		<div
			className={plannerOpaque && 'opaque'}
			id='grid_container'
			style={{
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
			}}>
			{[...Array(gridItems)].map((item, index) => (
				<GridItem
					className='gridItem'
					id={index}
					key={index}
					// Skip first cell - bring index back into Sync
					unitName={index !== 0 && plannerUnitNames[index - 1]}
					// Skip first cell - bring index back into Sync
					unitColor={index !== 0 && plannerUnitColors[index - 1]}
					weekNumbers={index / plannerColumns}></GridItem>
			))}
			<style jsx>{`
				#grid_container {
					display: grid;
					max-width: 1000px;
					min-width: 600px;
					margin: 100px auto;
					box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1),
						0 10px 10px rgba(0, 0, 0, 0.1);
				}
				.opaque {
					opacity: 0.1;
				}
			`}</style>
		</div>
	);
};

export default GridContainer;
