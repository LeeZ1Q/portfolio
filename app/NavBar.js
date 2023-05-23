import Link from 'next/link';
import styles from './Nav.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signature}>Lee</div>
      <nav className={styles.nav}>
        <Link href='/' className={styles.link}>
          Blog
        </Link>
        <Link href='/' className={styles.link}>
          Projects
        </Link>
        <Link href='/'>
          <span className={`iconfont ${styles.icon}`}>&#xe885;</span>
        </Link>
        <Link href='/'>
          <span className={`iconfont ${styles.icon}`}>&#xe66d;</span>
        </Link>
        <Link href='/'>
          <span className={`iconfont ${styles.icon}`}>&#xe635;</span>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;