import Head from 'next/head';
import Navbar from './Navbar';
import MobileNavBar from './MobileNavBar';

export default function Layout({ children, pageTitle, ...props }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, intial-scale=1' />
				<title>{pageTitle}</title>
			</Head>
			<section className='layout'>
				<Navbar />
				<MobileNavBar />
				<div className='content'>{children}</div>
			</section>

			<style jsx global>{`
				@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;900&display=swap');
				html,
				body {
					margin: 0px;
					padding: 0px;
					font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont,
						'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue',
						sans-serif;
					color: #445566;
					font-size: 16px;
				}
				:root {
					--text: #505050;
					--green: #80e5a6;
					--blue: #84d9ff;
					--red: #c62121;
				}
			`}</style>
			<style jsx>{`
				.content {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin: auto;
				}
			`}</style>
		</>
	);
}
