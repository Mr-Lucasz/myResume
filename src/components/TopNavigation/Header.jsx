import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import logotipo from "../../assets/logotipo-lucas-rodrigues.svg";
import { Navbar } from "./Navbar";
import brFlag from "../../assets/flag-br.png";
import usFlag from "../../assets/flag-us.png";

export function Header() {
  const { i18n, t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transparency, setTransparency] = useState(0);
  const [listOpen, setListOpen] = useState(false);

  const languages = [
    { code: "pt", label: "Português", flag: brFlag },
    { code: "en", label: "English", flag: usFlag },
  ];
  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setTransparency(scrollPosition > 500 ? 1 : scrollPosition / 500);
    };
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest('.' + styles.languageListChoice)) setListOpen(false);
    }
    if (listOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [listOpen]);

  const logoStyle = {
    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
  };
  const headerStyle = {
    backgroundColor: `rgba(27, 27, 27, ${transparency * 0.85})`,
    backdropFilter: `blur(${transparency * 5}px)`
  };

  const handleListToggle = () => setListOpen((open) => !open);
  const handleSelect = (lang) => {
    if (lang !== i18n.language) i18n.changeLanguage(lang);
    setListOpen(false);
  };

  return (
    <header style={headerStyle} className={styles.header}>
      <div>
        <img
          src={logotipo}
          alt="Logotipo Lucas Rodrigues"
          className={styles.logotipo}
          style={logoStyle}
        />
      </div>
      <Navbar />
      <div
        className={styles.languageListChoice + (listOpen ? ' ' + styles.open : '')}
        tabIndex={0}
        onBlur={() => setListOpen(false)}
      >
        <div
          className={styles.languageListTitle}
          onClick={handleListToggle}
          aria-haspopup="listbox"
          aria-expanded={listOpen}
        >
          <img src={currentLang.flag} alt={currentLang.label} className={styles.languageListFlag} />
          {currentLang.label}
        </div>
        <div className={styles.languageListObjects} style={{ pointerEvents: listOpen ? 'auto' : 'none' }}>
          {languages.map(lang => (
            <label key={lang.code} className={styles.languageListLabel}>
              <input
                type="radio"
                className={styles.languageListRadio}
                name="language"
                checked={i18n.language === lang.code}
                onChange={() => handleSelect(lang.code)}
                tabIndex={listOpen ? 0 : -1}
              />
              <span>
                <img src={lang.flag} alt={lang.label} className={styles.languageListFlag} />
                {lang.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </header>
  );
}
