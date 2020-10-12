import Head from 'next/head';
import Link from 'next/link';

import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';
import Layout from '../components/Layout';

export default function Home() {
	const { numberOfWeeksInput, setNumberOfUnitsInput } = useContext(
		InputContext,
	);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<Link href='/units-count'>
					<a>Unit Count</a>
				</Link>
				<p>{numberOfWeeksInput}</p>
			</Layout>
		</div>
	);
}
