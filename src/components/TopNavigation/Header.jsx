import styles from "./Header.module.css";
import logotipo from "../../assets/logotipo-lucas-rodrigues.svg";
import { Navbar } from "./Navbar";
import { Button } from "../Button";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img
          src={logotipo}
          alt="Logotipo Lucas Rodrigues"
          className={styles.logotipo}
        />
      </div>
      <Navbar />
      <Button onClick={() => console.log("Cliquei!")}>Blog</Button>
    </header>
  );
}
