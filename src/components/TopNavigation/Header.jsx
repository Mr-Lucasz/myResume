import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logotipo from "../../assets/logotipo-lucas-rodrigues.svg";
import { Navbar } from "./Navbar";

function HamburgerButton({ menuOpen, setMenuOpen }) {
  return (
    <button
      className={styles.hamburger + (menuOpen ? ' ' + styles.hamburgerOpen : '')}
      aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen((open) => !open)}
    >
      <span className={styles.hamburgerBar}></span>
      <span className={styles.hamburgerBar}></span>
      <span className={styles.hamburgerBar}></span>
      {/* Ícone de close (X) sobreposto */}
      <span className={styles.closeIcon}>&#10005;</span>
    </button>
  );
}

export function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transparency, setTransparency] = useState(0);
  const [listOpen, setListOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className={styles.logoContainer}>
        <img
          src={logotipo}
          alt="Logotipo Lucas Rodrigues"
          className={styles.logotipo}
          style={logoStyle}
        />
      </div>
      <div className={styles.spacer} />
      <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}
