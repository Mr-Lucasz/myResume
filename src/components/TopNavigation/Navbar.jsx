// Importe Link de react-scroll
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {/* Adicione 'spy' e 'hashSpy' para atualizar a URL ao rolar */}
        <li><Link to="about" spy={true} hashSpy={true} smooth={true} duration={500}>About me</Link></li>
        <li><Link to="experiences" spy={true} hashSpy={true} smooth={true} duration={500}>Experiences</Link></li>
        <li><Link to="skills" spy={true} hashSpy={true} smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" spy={true} hashSpy={true} smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" spy={true} hashSpy={true} smooth={true} duration={500}>Contact me</Link></li>
      </ul>
    </nav>
  );
}