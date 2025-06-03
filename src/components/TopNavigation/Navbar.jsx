// Importe Link de react-scroll
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';

export function Navbar() {
  const { t } = useTranslation();

  const headerOffset = -96;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li><Link to="about" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('about')}</Link></li>
        <li><Link to="experiences" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('experiences')}</Link></li>
        <li><Link to="skills" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('skills')}</Link></li>
        <li><Link to="projects" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('projects')}</Link></li>
        <li><Link to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('contact')}</Link></li>
      </ul>
    </nav>
  );
}