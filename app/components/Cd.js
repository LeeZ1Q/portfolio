import Link from "next/link";
import styles from "../styles/Cd.module.css";

const Cd = () => {
	return (
		<div className={styles.cd}>
			<Link
				href="/blog"
				className={styles.link}
			>
				cd..
			</Link>
		</div>
	);
};

export default Cd;
