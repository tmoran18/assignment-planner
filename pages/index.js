import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { PlannerContext } from '../context/PlannerContext';
import Layout from '../components/Layout';
import Button from '../components/Button';

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
				<section className='header text-center'>
					<h2>Quickly build a Planner for your Assignments</h2>
					<p className='text-center'>
						Assignment Planner is an open source tool for building a clean &
						functional grid planner for scheduling your assignments. Quickly see
						where your assignments are due with week dates and colour coding.
					</p>
					<div className='btn_container'>
						<Button onClick={clearSavedPlanner}>Create New Planner</Button>
						{plannerSaved && (
							<Link href='/planner'>
								<a>
									<Button style='inverse'>View Saved Planner</Button>
								</a>
							</Link>
						)}
					</div>
					<div className='img_container'>
						<img src='/planner_header.jpg' alt='' />
					</div>
				</section>
			</Layout>
			<style jsx>{`
				.text-center {
					text-align: center;
				}
				.header {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.header h2 {
					font-weight: 900;
					max-width: 320px;
					font-size: 28px;
					color: #444;
					margin-bottom: 10px;
				}
				.header p {
					max-width: 320px;
					line-height: 1.7;
					font-size: 16px;
				}
				.img_container {
					padding:20px;
				}

				.img_container img {
					width:100%;
					height:auto;
				}
				@media only screen and (min-width: 800px) {
					.header h2 {
						font-size: 60px;
						max-width: 680px;
					}
					.header p {
						max-width: 680px;
						font-size: 20px;
					}
					.btn_container {
						display: flex;
						justify-content: center
						min-width: 450px;
					}
				}
			`}</style>
		</div>
	);
}
