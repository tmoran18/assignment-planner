import React from 'react';

const AddAssignmentModal = () => {
	return (
		<div>
			<form className='flex-col'>
				<input type='text' placeholder='Assignment Name' />
				<input type='text' placeholder='Assingment Type' />
				<input type='date' />
				<input type='text' placeholder='length' />
				<input type='submit' value='Save' />
			</form>
			<style jsx>{`
				div {
					height: 20px;
					width: 100%;
					display: flex;
					justify-content: center;
					z-index: 2;
				}
				form {
					position: absolute;
					margin: auto;
					top: 200px;
					background: #e5e5e5;
					padding: 120px;
					border-radius: 4px;
					text-align: center;
				}
			`}</style>
		</div>
	);
};

export default AddAssignmentModal;
