import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { InputContext } from '../context/InputContext';
import { PlannerContext } from '../context/PlannerContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

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
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<motion.div className='flex-col max-width-input'>
					<label htmlFor=''>Number of Units</label>
					<input
						type='number'
						placeholder='Number of Units'
						name='numOfUnits'
						value={numberOfUnitsInput}
						onChange={(e) => setNumberOfUnitsInput(e.target.value)}
					/>
					<button href='/unit-details' onClick={saveNumOfUnits}>
						Next
					</button>
				</motion.div>
				<style jsx>{`button {
    max-widt
  }`}</style>
			</Layout>
		</>
	);
}
