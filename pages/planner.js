import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AssignmentContext } from '../context/AssignmentContext';
import { PlannerContext } from '../context/PlannerContext';
import Layout from '../components/Layout';
import GridContainer from '../components/GridContainer';

export default function Planner() {
	// Assignment Context
	const { assignments, setAssignments } = useContext(AssignmentContext);
	// Planner Context
	const {
		plannerUnitNames,
		setPlannerUnitNames,
		plannerUnitStartDates,
		setPlannerUnitStartDates,
		plannerUnitWeeks,
		setPlannerUnitWeeks,
		plannerUnitColors,
		setPlannerUnitColors,
		plannerColumns,
		setPlannerColumns,
		setPlannerSaved,
	} = useContext(PlannerContext);

	// Save Planner State to local storage
	const savePlannerLocal = () => {
		localStorage.setItem('assignments', JSON.stringify(assignments));
		localStorage.setItem('plannerUnitNames', JSON.stringify(plannerUnitNames));
		localStorage.setItem(
			'plannerUnitStartDates',
			JSON.stringify(plannerUnitStartDates),
		);
		localStorage.setItem('plannerUnitWeeks', JSON.stringify(plannerUnitWeeks));
		localStorage.setItem(
			'plannerUnitColors',
			JSON.stringify(plannerUnitColors),
		);
		localStorage.setItem('plannerColumns', JSON.stringify(plannerColumns));
		localStorage.setItem('plannerSaved', JSON.stringify(true));
		setPlannerSaved(true);
	};

	// Check if there is a saved planner on load - if there is update planner States
	useEffect(() => {
		localStorage.getItem('plannerSaved') !== null && setSavedPlannerStates();
	}, []);

	// Retrieve planner states and setStates
	const setSavedPlannerStates = () => {
		const localAssignments = JSON.parse(localStorage.getItem('assignments'));
		const localPlannerUnitStartDates = JSON.parse(
			localStorage.getItem('plannerUnitStartDates'),
		);
		const localPlannerUnitWeeks = JSON.parse(
			localStorage.getItem('plannerUnitWeeks'),
		);
		const localPlannerUnitColors = JSON.parse(
			localStorage.getItem('plannerUnitColors'),
		);
		const localPlannerColumns = JSON.parse(
			localStorage.getItem('plannerColumns'),
		);
		const localUnitNames = JSON.parse(localStorage.getItem('plannerUnitNames'));

		setPlannerUnitNames(localUnitNames);
		setPlannerUnitStartDates(localPlannerUnitStartDates);
		setPlannerUnitWeeks(localPlannerUnitWeeks);
		setPlannerUnitColors(localPlannerUnitColors);
		setPlannerColumns(localPlannerColumns);
		setAssignments(localAssignments);
	};

	return (
		<div>
			<Head>
				<title>PLanner</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				{plannerColumns == 0 ? (
					<div>
						<Link href='/units-count'>
							<button>Create Planner</button>
						</Link>
					</div>
				) : (
					<div>
						<GridContainer />
						<button onClick={savePlannerLocal}>Save Planner</button>
					</div>
				)}
			</Layout>
		</div>
	);
}
