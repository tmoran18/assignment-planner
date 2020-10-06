import React from 'react';
import style from './UnitName.module.css';
import '../../global.css';

const UnitName = ({ unitName, unitColor }) => {
	const bg = unitColor.toString();
	return (
		<div className={`${style.unitName} ${unitColor}_bg`}>
			<h3>{unitName}</h3>
		</div>
	);
};

export default UnitName;
