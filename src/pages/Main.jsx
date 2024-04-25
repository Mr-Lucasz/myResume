// Main.js
import { useState } from "react";
import { Background } from "../components/Background";
import { Header } from "../components/TopNavigation/Header";
import { LoadingScreen } from "../components/LoadingScreen.jsx";
import { AboutMe } from "./sections/AboutMe.jsx";
import { Experiences } from "./sections/Experiences.jsx";
import { Skills } from "./sections/Skills.jsx";
import styles from "./Main.module.css";
import AnimatedCursor from "react-animated-cursor";
import { Projects } from "./sections/Projects.jsx";
import { Contact } from "./sections/Contact.jsx";

export function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleStartClick = () => {
    setIsLoading(true);
  };

  const handleVideoEnd = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  if (isLoading) {
    return <LoadingScreen onVideoEnd={handleVideoEnd} />;
  }

  if (showContent) {
    return (
      <div>
        <Background>
          <AnimatedCursor color="193, 11, 111" />
          <Header />
          <section className={styles.sections}>
            <AboutMe />
            <Experiences />
            <Skills/>
            <Projects/>
            <Contact/>
          </section>
        </Background>
      </div>
    );
  }
  // Tela inicial com o botão Start
  return (
    <div className={styles.playContainer}>
      {/* Botão estilizado com animação ao passar o mouse */}
      <button className={styles.playButton} onClick={handleStartClick}>
        PLAY
      </button>
    </div>
  );
}
