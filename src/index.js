import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlannerContext from './context/PlannerContext';
import InputContext from './context/InputContext';
import AppContext from './context/AppContext';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<AppContext>
			<InputContext>
				<PlannerContext>
					<App />
				</PlannerContext>
			</InputContext>
		</AppContext>
	</React.StrictMode>,
	document.getElementById('root'),
);
