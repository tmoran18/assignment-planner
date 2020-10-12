import React, { useContext } from 'react';
import Head from 'next/head';
import { AssignmentContext } from '../context/AssignmentContext';
import GridContainer from '../components/GridContainer';
import Layout from '../components/Layout';
import AddAssignmentModal from '../components/AddAssignmentModal';

export default function Planner() {
	const { showAssignmentModal, setShowAssignmentModal } = useContext(
		AssignmentContext,
	);
	return (
		<div>
			<Head>
				<title>PLanner</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				{showAssignmentModal && <AddAssignmentModal />}
				<GridContainer />
			</Layout>
		</div>
	);
}
