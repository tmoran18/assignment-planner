import React from 'react';

const Assignment = ({ name, type, dueDate, length, bgColor }) => {
	return (
		<div>
			<div className={`${bgColor} ${bgColor}_border`}>
				<span className='bold'>{name}</span>
				<br></br>
				<span>{type}</span>
				<br />
				<span>{dueDate}</span>
				<br />
				<span>{length}</span>
				<br />
			</div>
			<style jsx>{`
				.blue {
					background: #50c4ff;
				}

				.red {
					background: #ed6d79;
				}
				.green {
					background: #80e5a6;
				}
				.purple {
					background: #b985ff;
				}
				div {
					color: #333;
				}
				.blue_border {
					border: 2px solid #50c4ff;
				}
				.red_border {
					border: 2px solid #ed6d79;
				}
				.green_border {
					border: 2px solid #80e5a6;
				}
				.purple_border {
					border: 2px solid #b985ff;
				}
				.bold {
					font-weight: bold;
				}
			`}</style>
		</div>
	);
};

export default Assignment;
