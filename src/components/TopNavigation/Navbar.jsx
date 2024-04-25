import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </nav>
  );
}