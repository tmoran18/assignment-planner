import React from 'react';

const Assignment = ({ name, type, dueDate, length, bgColor }) => {
	return (
		<div>
			<div className={`${bgColor} ${bgColor}_border shadow`}>
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
				.shadow {
					box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.12),
						1px 2px 15px rgba(0, 0, 0, 0.14);
				}
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
