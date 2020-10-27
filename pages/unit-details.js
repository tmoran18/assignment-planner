import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { InputContext } from '../context/InputContext';
import { PlannerContext } from '../context/PlannerContext';
import Head from 'next/head';

import Layout from '../components/Layout';
import Form from '../components/Form';

export default function UnitDetails() {
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
				<section style={{ height: '100vh' }}>
					<Form />
				</section>
			</Layout>
		</div>
	);
}
