import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer>
				<img src='/planner_logo_white.png' width='200' alt='' />
				<span>Copyright &copy; - Tim Moran 2020</span>
			</footer>
			<style jsx>
				{`
					footer {
						position: sticky;
						left: 0;
						bottom: 0;
						right: 0;
						background-color: #333;
						color: white;
						height: 80px;
						padding: 20px;
						text-align: center;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					span {
						margin-top: 10px;
						margin-left: 50px;
					}
					@media only screen and (max-width: 600px) {
						footer {
							display: none;
						}
					}
				`}
			</style>
		</>
	);
}
