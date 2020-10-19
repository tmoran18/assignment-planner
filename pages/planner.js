import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import GridContainer from '../components/GridContainer';
import Layout from '../components/Layout';
import { AssignmentContext } from '../context/AssignmentContext';
import { PlannerContext } from '../context/PlannerContext';

// If plannerSaved = true show create new planner button & Saved Planner Button
// if plannerSaved = false show create new Planner Button
export default function Planner() {
	const { assignments, setAssignments } = useContext(AssignmentContext);
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

	// Check if there is a saved planner on load - if there is show saved planner button
	useEffect(() => {
		localStorage.getItem('plannerSaved') !== null && setSavedPlannerStates();
	}, []);

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
				<GridContainer />
				<button onClick={savePlannerLocal}>Save Planner</button>
			</Layout>
		</div>
	);
}
