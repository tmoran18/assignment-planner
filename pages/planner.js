import React, { useContext } from 'react';
import Head from 'next/head';
import GridContainer from '../components/GridContainer';
import Layout from '../components/Layout';
import AddAssignmentModal from '../components/AddAssignmentModal';

export default function Planner() {
	return (
		<div>
			<Head>
				<title>PLanner</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<GridContainer />
			</Layout>
		</div>
	);
}
