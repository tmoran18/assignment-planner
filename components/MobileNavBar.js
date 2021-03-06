import React, { useState } from 'react';
import Link from 'next/link';

export default function MobileNavbar() {
	const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
	// Toggle the Mobile Nav open / close
	const handleMobileNavClick = () => {
		mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
	};

	return (
		<nav className='mobileNav_container'>
			<Link href='/'>
				<img
					style={{ cursor: 'pointer' }}
					src='./planner_logo.png'
					width='170'
					alt='logo'
				/>
			</Link>
			<img
				className='menu_icon'
				src='./menu_icon.svg'
				alt='hamburger menu icon'
				onClick={handleMobileNavClick}
			/>
			<div className='mobileNav_menu_container'>
				<ul
					className={`
	     ${mobileNavIsOpen ? 'mobileNav_open' : 'mobileNav_closed'} 
	     mobileNav_menu_list`}>
					<Link href='/'>
						<li>Home</li>
					</Link>
					<Link href='/#about'>
						<li>About</li>
					</Link>
					<Link href='/#testimonials'>
						<li>Testimonials</li>
					</Link>
				</ul>
			</div>
			<style jsx>{`
				ul {
					list-style-type: none;
					padding: 0px;
				}

				ul li {
					padding: 15px;
				}

				/* Navbar */
				.navbar {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 10px;
				}

				.menu_list {
					display: flex;
				}

				/* Mobile Navbar */
				.menu_icon {
					position: absolute;
					top: 20px;
					right: 20px;
					cursor: pointer;
					z-index: 2;
				}

				.mobileNav_menu_container {
					position: relative;
					width: 100%;
				}

				.mobileNav_menu_list {
					display: flex;
					flex-direction: column;
					align-items: center;
					position: absolute;
					width: 100%;
					margin: auto;
					background: dodgerblue;
					border-radius: 4px;
					color: white;
					transition: ease all 0.4s;
				}

				.mobileNav_container {
					display: none;
					padding: 10px;
				}

				.mobileNav_closed {
					top: -300px;
				}

				.mobileNav_open {
					top: 10px;
				}

				/* Media Queries */
				@media only screen and (max-width: 800px) {
					/* Navbar Media Queries */
					.navbar {
						display: none;
					}
					/* Mobile Navbar Media Queries */
					.mobileNav_container {
						display: flex;
						flex-direction: column;
					}
				}
			`}</style>
		</nav>
	);
}
