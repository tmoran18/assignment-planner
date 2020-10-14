import React from 'react';

const Assignment = ({ name, type, dueDate, length }) => {
	return (
		<div>
			<div>
				<span>{name}</span>
				<br></br>
				<span>{type}</span>
				<br />
				<span>{dueDate}</span>
				<br />
				<span>{length}</span>
				<br />
			</div>
		</div>
	);
};

export default Assignment;
