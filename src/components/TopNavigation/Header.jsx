import { useState, useEffect } from 'react';
import styles from "./Header.module.css";
import logotipo from "../../assets/logotipo-lucas-rodrigues.svg";
import { Navbar } from "./Navbar";
import { Button } from "../Button";

export function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const logoStyle = {
    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`, // Efeito parallax
  };

  return (
    <header className={styles.header}>
      <div>
        <img
          src={logotipo}
          alt="Logotipo Lucas Rodrigues"
          className={styles.logotipo}
          style={logoStyle} // Aplique os estilos calculados
        />
      </div>
      <Navbar />
      <Button onClick={() => console.log("Cliquei!")}>Blog</Button>
    </header>
  );
}