import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { PlannerContext } from '../context/PlannerContext';
import Layout from '../components/Layout';
import Button from '../components/Button';
import FlexRow from '../components/FlexRow';
import IconCard from '../components/IconCard';
import Testimonial from '../components/Testimonial';

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
								<a style={{ marginLeft: '30px' }}>
									<Button style='inverse'>View Saved Planner</Button>
								</a>
							</Link>
						)}
					</div>
					<div className='img_container'>
						<img src='/planner_header.jpg' alt='' />
					</div>
				</section>
				<section className='section_2'>
					<FlexRow
						title='Create your planner in minutes'
						body='Assingment Planner makes it quick and easy to create your study panner using familar web forms. Add your unit details, unit start date and unit colours.'
						imgPath='/unit_details_example.gif'
						imgAlt='Animation of web form being filled out'
						boxShadow='true'
					/>
					<FlexRow
						title='See assignments and exams at a glance'
						body='Assingment Planner gives you the ability to see all your assignments and exams on one page and when they are due can help you plan your study routines. '
						imgPath='/planner_section_2.jpg'
						imgAlt='Assignment Planner with assignments on it'
						direction='reverse'
					/>
				</section>
				<section className='section_3'>
					<h2>Save your planner to view and use throughout the semester</h2>
					<article>
						<IconCard
							iconPath={'/organise_icon.svg'}
							iconAlt={'An icon of a book and pencil'}
							title='Organise Yourself'
							body={
								'Assignment Planner allows you to start getting yourself organised for study.'
							}
						/>
						<IconCard
							iconPath={'/productive_icon.svg'}
							iconAlt={'An icon showing a bar graph'}
							title='Be productive'
							body={
								'Seeing all your assignments and exams in one spot allows you to be more productive.'
							}
						/>
						<IconCard
							iconPath={'/plan_icon.svg'}
							iconAlt={'An icon showing a bar graph'}
							title='Plan Your Study'
							body={
								'Planning your study around when your assignments and exams are due is working smarter not harder.'
							}
						/>
					</article>
					<Button onClick={clearSavedPlanner}>Create New Planner</Button>
				</section>
				<section className='section_4'>
					<Testimonial
						quote={
							'“Assignment Planner helped me to visualise and plan my study around assingments & exams!”'
						}
						thumbPath={'testimonial_thumb.png'}
						thumbAlt={'Portrai of User'}
						name={'Tim Moran'}
						info={'Student, Southern Cross University'}
					/>
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
					margin-bottom:50px
					
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
				.section_2, .section_4 {
					background: #f6f9fc;
					border-top:2px solid rgba(218, 218, 218, 0.247);
					border-bottom:2px solid rgba(218, 218, 218, 0.247);
					width:100%;
					padding:30px;
				}
				.section_3 {
					background:white;
					margin-top:30px;
					text-align:center;
					margin-bottom:50px;
				}
				.section_3 article {
					display:flex;
					flex-direction:column;
					align-items:center;
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
					.section_2 {
						padding:50px 30px;
					}
					.section_3 article {
						flex-direction:row;
					}
					.section_4 {
						display:flex;
						justify-content:center;
					}
				}
			`}</style>
		</div>
	);
}
