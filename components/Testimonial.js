export default function Testimonial({
	quote,
	thumbPath,
	thumbAlt,
	name,
	info,
}) {
	return (
		<div className='testimonial_container'>
			<p>{quote}</p>
			<div className='img_name_container'>
				<img src={thumbPath} alt={thumbAlt} />
				<div className='flex-col'>
					<span className='name'>{name}</span>
					<span className='info'>{info}</span>
				</div>
			</div>
			<style jsx>{`
				.flex-col {
					display: flex;
					flex-direction: column;
				}
				p {
					text-align: center;
					font-size: 18px;
					font-weight: 600;
				}
				.name {
					font-weight: 600;
				}
				.info {
					color: #808080;
					font-size: 12px;
				}
				.testimonial_container {
					display: flex;
					flex-direction: column;
					align-items: center;
					max-width: 400px;
				}
				.img_name_container {
					display: flex;
					align-items: center;
				}
			`}</style>
		</div>
	);
}
