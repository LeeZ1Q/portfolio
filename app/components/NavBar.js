import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
	return (
		<div className={styles.container}>
			<Link
				href='/'
				className={styles.signature}
			>
				Lee
			</Link>
			<nav className={styles.nav}>
				{/* Mobile Icon */}
				<Link href='/blog'>
					<span className={`iconfont ${styles.mobile} ${styles.icon}`}>
						&#xe634;
					</span>
				</Link>
				<Link href='/project'>
					<span className={`iconfont ${styles.mobile} ${styles.icon}`}>
						&#xe8d9;
					</span>
				</Link>

				{/* Laptop Link */}
				<Link
					href='/'
					className={`${styles.link} ${styles.laptop}`}
				>
					Me
				</Link>
				<Link
					href='/blog'
					className={`${styles.link} ${styles.laptop}`}
				>
					Blog
				</Link>
				<Link
					href='/project'
					className={`${styles.link} ${styles.laptop}`}
				>
					Projects
				</Link>

				{/* Other Icon */}
				<Link
					href='https://github.com/LeeZ1Q'
					rel='noreferrer'
					target='_blank'
					className={`iconfont ${styles.icon}`}
				>
					&#xe972;
				</Link>
				<Link
					href='https://space.bilibili.com/67972196'
					rel='noreferrer'
					target='_blank'
					className={`iconfont ${styles.icon}`}
				>
					&#xe66d;
				</Link>
				<ThemeToggle />
			</nav>
		</div>
	);
};

export default NavBar;
