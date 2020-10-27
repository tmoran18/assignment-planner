import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { InputContext } from '../context/InputContext';
import { PlannerContext } from '../context/PlannerContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Button from '../components/Button';

export default function UnitNum() {
	// App context
	const {
		numberOfUnits,
		setNumberOfUnits,
		unitDetails,
		setUnitDetails,
		showUnitPlanner,
		setFormCounter,
	} = useContext(AppContext);

	// Input context
	const { numberOfUnitsInput, setNumberOfUnitsInput } = useContext(
		InputContext,
	);

	// Planner context
	const { setPlannerColumns } = useContext(PlannerContext);
	const router = useRouter();

	const saveNumOfUnits = (e) => {
		if (numberOfUnitsInput > 0) {
			e.preventDefault();
			setFormCounter(numberOfUnitsInput);
			setNumberOfUnits(false);
			setUnitDetails(true);
			setPlannerColumns(numberOfUnitsInput);
			router.push('/unit-details');
		} else {
			alert('Number of Units must be more than 0');
		}
	};
	return (
		<>
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
				<motion.div
					className='flex-col max-width-input'
					style={{ height: '100vh' }}>
					<label htmlFor='Number of Units'>Number of Units</label>
					<input
						type='number'
						placeholder='Number of Units'
						name='numOfUnits'
						value={numberOfUnitsInput}
						onChange={(e) => setNumberOfUnitsInput(e.target.value)}
					/>
					<Button href='/unit-details' onClick={saveNumOfUnits}>
						Next
					</Button>
				</motion.div>
			</Layout>
		</>
	);
}
