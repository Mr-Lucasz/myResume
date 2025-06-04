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

  const logoStyle = {
    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
  };
  const headerStyle = {
    backgroundColor: `rgba(27, 27, 27, ${transparency * 0.85})`,
    backdropFilter: `blur(${transparency * 5}px)`
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
