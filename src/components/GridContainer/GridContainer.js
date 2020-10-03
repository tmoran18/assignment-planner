import React, { useState } from 'react';
import GridItem from '../GridItem/GridItem';
import UnitName from '../UnitName/UnitName';
import s from './GrdiContainer.module.css';

const GridContainer = () => {
	const [columns, setColumns] = useState(3);
	const [rows, setRows] = useState(12);
	const gridItems = columns * rows;

	return (
		<div id={s.grid_container}>
			{[...Array(gridItems)].map((item, index) => (
				<GridItem className={s.gridItem} id={index} key={index}></GridItem>
			))}
		</div>
	);
};

export default GridContainer;
