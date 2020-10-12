import React from 'react';
import { motion } from 'framer-motion';
import '../styles/globals.css';
import AppContext from '../context/AppContext';
import PlannerContext from '../context/PlannerContext';
import InputContext from '../context/InputContext';

function MyApp({ Component, pageProps, router }) {
	return (
		<AppContext>
			<InputContext>
				<PlannerContext>
					<motion.div
						key={router.route}
						initial='pageInitial'
						animate='pageAnimate'
						transition={{ duration: 0.8 }}
						variants={{
							pageInitial: {
								opacity: 0,
							},
							pageAnimate: {
								opacity: 1,
							},
						}}>
						<Component {...pageProps} />
					</motion.div>
				</PlannerContext>
			</InputContext>
		</AppContext>
	);
}

export default MyApp;
