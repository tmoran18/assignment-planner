import Head from 'next/head';
import Link from 'next/link';

export default function Planners() {
	const planners = {
		planner: {
			id: 0,
			numGridItems: 36,
		},
	};
	return (
		<div>
			<Head>
				<title>Planners</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section>Planners</section>
			<ul>
				<li>Make a call to DB to get a list of planners data</li>
				<li>
					Have some State thats empty, and when a planner is chosen, insert that
					planner data into the state, and hides the list of planners
				</li>
			</ul>
		</div>
	);
}
