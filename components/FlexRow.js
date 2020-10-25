import { motion } from 'framer-motion';
export default function FlexRow({
	title,
	body,
	imgPath,
	imgAlt,
	direction,
	boxShadow,
}) {
	return (
		<section className={direction}>
			<article>
				<h2>{title}</h2>
				<p>{body}</p>
			</article>
			<div className='img_container'>
				<img src={imgPath} alt={imgAlt} className={boxShadow && 'shadow'} />
			</div>

			<style jsx>{`
				section {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					text-align: center;
					flex-wrap: wrap;
				}
				article {
					max-width: 450px;
					min-width: 300px;
					margin: 10px;
				}
				img {
					width: 100%;
					height: auto;
					padding: 10px;
				}
				h2 {
					line-height: 1.2;
					font-size: 30px;
				}
				p {
					font-size: 16px;
					line-height: 1.5;
				}
				.reverse {
					flex-direction: row-reverse;
				}
				.shadow {
					box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.06);
				}
				@media only screen and (min-width: 800px) {
					h2 {
						font-size: 40px;
					}
					p {
						font-size: 20px;
					}
					section {
						text-align: left;
						max-width: 1300px;
						margin: auto;
						justify-content: space-between;
						padding: 50px 30px;
						flex-wrap: nowrap;
					}
				}
			`}</style>
		</section>
	);
}
