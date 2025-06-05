import React from "react";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from './Navbar.module.css';

export function Navbar({ menuOpen, setMenuOpen }) {
  const { t } = useTranslation();
  const headerOffset = -96;

  // Fecha o menu mobile ao clicar em um link
  const handleLinkClick = () => {
    if (setMenuOpen) setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Menu padrão desktop */}
      <ul className={styles.navbarList + ' ' + styles.desktopMenu}>
        <li><Link to="about" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('about')}</Link></li>
        <li><Link to="experiences" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('experiences')}</Link></li>
        <li><Link to="skills" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('skills')}</Link></li>
        <li><Link to="projects" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('projects')}</Link></li>
        <li><Link to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset}>{t('contact')}</Link></li>
      </ul>
      <div className={styles.desktopLang}><LanguageSwitcher /></div>
      {/* Menu mobile */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList}>
            <li><Link to="about" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset} onClick={handleLinkClick}>{t('about')}</Link></li>
            <li><Link to="experiences" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset} onClick={handleLinkClick}>{t('experiences')}</Link></li>
            <li><Link to="skills" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset} onClick={handleLinkClick}>{t('skills')}</Link></li>
            <li><Link to="projects" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset} onClick={handleLinkClick}>{t('projects')}</Link></li>
            <li><Link to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={headerOffset} onClick={handleLinkClick}>{t('contact')}</Link></li>
          </ul>
          <div className={styles.mobileLang}><LanguageSwitcher /></div>
        </div>
      )}
    </nav>
  );
}