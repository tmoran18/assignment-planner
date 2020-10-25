import { motion } from 'framer-motion';
export default function Button({ children, onClick, style }) {
	return (
		<motion.div
			onClick={onClick}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 1.3 }}>
			<button className={style}>
				{children}
				<style jsx>{`
					button {
						box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06),
							0px 2px 6px rgba(0, 0, 0, 0.1);
						padding: 8px 24px;
						font-size: 16px;
						border-radius: 100px;
						min-width: 120px;
						border: 1px solid #e1e1e9;
						background: #01a5fd;
						color: white;
						font-weight: bold;
						cursor: pointer;
					}
					.inverse {
						background: white;
						color: #01a5fd;
						border: 1px solid #01a5fd;
					}
				`}</style>
			</button>
		</motion.div>
	);
}
