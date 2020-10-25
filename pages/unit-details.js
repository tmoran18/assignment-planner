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
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<section style={{ height: '100vh' }}>
					<Form />
				</section>
			</Layout>
		</div>
	);
}
