import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
	font-size: 2rem;
	color: red;
`;

function App() {
	return (
		<div className='App'>
			<Heading>Assignment Planner</Heading>
		</div>
	);
}

export default App;
