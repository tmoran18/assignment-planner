import React from 'react';

const UnitName = ({ unitName, unitColor }) => {
	return (
		<div className={`unitName ${unitColor}_bg`}>
			<h3>{unitName}</h3>
			<style jsx>{`
				.unitName {
					text-align: center;
					color: white;
					border: 2px solid #333;
				}
				.unitName h3 {
					font-weight: 600;
				}
			`}</style>
		</div>
	);
};

export default UnitName;
