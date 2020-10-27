import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AssignmentContext } from '../context/AssignmentContext';
import { PlannerContext } from '../context/PlannerContext';
import Layout from '../components/Layout';
import GridContainer from '../components/GridContainer';
import Button from '../components/Button';

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
		plannerSaved,
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
			<Layout>
				<Head>
					<meta charSet='utf-8' />
					<title>
						Assignment Planner | An App for planning your Assignments
					</title>
					<meta
						name='description'
						content='Assignment Planner allows students to visualise all their upcoming assignments & exams to help plan their study schedule'
					/>
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width'
					/>
				</Head>
				{plannerColumns == 0 ? (
					<div style={{ height: '100vh' }}>
						<Link href='/units-count'>
							<Button>Create Planner</Button>
						</Link>
					</div>
				) : (
					<div className='container' style={{ height: '100vh' }}>
						<GridContainer />
						<br></br>
						<br></br>
						<div style={{ margin: 'auto', paddingBottom: '20px' }}>
							<Button onClick={savePlannerLocal}>
								{plannerSaved ? 'Planner Saved' : 'Save Planner'}
							</Button>
						</div>
					</div>
				)}
			</Layout>
			<style jsx>{`
				div {
					text-align: center;
				}
				@media only screen and (max-width: 800px) {
					.container {
						display: flex;
						flex-direction: column;
						width: 95%;
						overflow: auto;
						align-items: flex-start;
						text-align: center;
					}
				}
			`}</style>
		</div>
	);
}
