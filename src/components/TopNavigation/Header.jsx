import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logotipo from "../../assets/logotipo-lucas-rodrigues.svg";
import { Navbar } from "./Navbar";

export function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transparency, setTransparency] = useState(0);

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
