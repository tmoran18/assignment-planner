export default function IconCard({ iconPath, iconAlt, title, body }) {
	return (
		<div className='icon_card_container'>
			<img src={iconPath} alt={iconAlt} />
			<h3>{title}</h3>
			<p>{body}</p>
			<style jsx>{`
				.icon_card_container {
					max-width: 300px;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					margin: 40px;
				}
				h3,
				p {
					padding: 0;
					margin: 0;
				}
				h3 {
					margin: 10px 0 5px 0;
					font-size: 30px;
				}
				p {
					font-size: 20px;
					line-height: 1.5;
				}
			`}</style>
		</div>
	);
}
