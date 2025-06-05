import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import logotipo from "../../assets/logotipo-lucas-rodrigues.svg";
import { Navbar } from "./Navbar";

export function Header() {
  const { i18n } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transparency, setTransparency] = useState(0);
  const [listOpen, setListOpen] = useState(false);
  const languages = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
  ];
  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  function handleListToggle() {
    setListOpen((open) => !open);
  }
  function handleSelect(lang) {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
    setListOpen(false);
  }
  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest('.' + styles.languageListChoice)) {
        setListOpen(false);
      }
    }
    if (listOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [listOpen]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      if (scrollPosition > 500) {
        setTransparency(1);
      } else {
        setTransparency(scrollPosition / 500);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoStyle = {
    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`, // Efeito parallax
  };

  const headerStyle = {
    backgroundColor: `rgba(27, 27, 27, ${transparency * 0.85})`,
    backdropFilter: `blur(${transparency * 5}px)`,
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
    </header>
  );
}
