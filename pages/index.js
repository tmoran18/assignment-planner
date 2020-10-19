import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PlannerContext } from '../context/PlannerContext';
import Layout from '../components/Layout';

export default function Home() {
	// Planner Context
	const { plannerSaved, setPlannerSaved } = useContext(PlannerContext);

	// Check if there is a saved planner on load - if there is, show saved planner button
	useEffect(() => {
		localStorage.getItem('plannerSaved') !== null && setPlannerSaved(true);
	}, []);

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<Link href='/units-count'>
					<a>
						<button>Create New Planner</button>
					</a>
				</Link>
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
