import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { PlannerContext } from '../context/PlannerContext';
import Layout from '../components/Layout';

export default function Home() {
	const router = useRouter();
	// Planner Context
	const { plannerSaved, setPlannerSaved } = useContext(PlannerContext);

	// Check if there is a saved planner on load - if there is, show saved planner button
	useEffect(() => {
		localStorage.getItem('plannerSaved') !== null && setPlannerSaved(true);
	}, []);

	// Check if there is a saved planner, if there is throw a confirm you want to overwrite it alert
	// If confirm, clear the planner and move onto new planner details
	// Else go nowhere
	const clearSavedPlanner = () => {
		if (plannerSaved) {
			let con = confirm(
				'This will overwrite your saved planner, are you sure?',
			);
			// If confirm clear planner, and route to new planner details
			con
				? (setPlannerSaved(false),
				  localStorage.clear(),
				  router.push('/units-count'))
				: //   Else route to current page
				  router.push('/');
		} else {
			router.push('/units-count');
		}
	};
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<button onClick={clearSavedPlanner}>Create New Planner</button>

				{plannerSaved && (
					<Link href='/planner'>
						<a>
							<button>Saved Planner</button>
						</a>
					</Link>
				)}
			</Layout>
		</div>
	);
}
