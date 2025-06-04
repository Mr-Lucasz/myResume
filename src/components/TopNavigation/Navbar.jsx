// Importe Link de react-scroll
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

export function Navbar() {
  const headerOffset = -96;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li><Link to="about" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>Sobre</Link></li>
        <li><Link to="experiences" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>Experiências</Link></li>
        <li><Link to="skills" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>Skills</Link></li>
        <li><Link to="projects" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>Projetos</Link></li>
        <li><Link to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>Contato</Link></li>
      </ul>
    </nav>
  );
}