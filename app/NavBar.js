import Link from "next/link";
import styles from "./Nav.module.css";

const NavBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.signature}>Lee</div>
			<nav className={styles.nav}>
				{/* Mobile Icon */}
				<Link href="/">
					<span className={`iconfont ${styles.mobile} ${styles.icon}`}>
						&#xe634;
					</span>
				</Link>
				<Link href="/">
					<span className={`iconfont ${styles.mobile} ${styles.icon}`}>
						&#xe650;
					</span>
				</Link>

				{/* Laptop Link */}
				<Link
					href="/"
					className={`${styles.link} ${styles.laptop}`}
				>
					Blog
				</Link>
				<Link
					href="/"
					className={`${styles.link} ${styles.laptop}`}
				>
					Projects
				</Link>

				{/* Other Icon */}
				<Link href="/">
					<span className={`iconfont ${styles.icon}`}>&#xe885;</span>
				</Link>
				<Link href="/">
					<span className={`iconfont ${styles.icon}`}>&#xe66d;</span>
				</Link>
				<Link href="/">
					<span className={`iconfont ${styles.icon}`}>&#xe635;</span>
				</Link>
			</nav>
		</div>
	);
};

export default NavBar;
