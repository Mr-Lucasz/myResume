import { useState } from "react";
import { Background } from "../components/Background";
import { Header } from "../components/TopNavigation/Header";
import { LoadingScreen } from "../components/LoadingScreen";
import { AboutMe } from "./sections/AboutMe";
import { Experiences } from "./sections/Experiences";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import styles from "./Main.module.css";
import AnimatedCursor from "react-animated-cursor";

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
      <div className={styles.page}>
        <Background>
          <AnimatedCursor color="193, 11, 111" />
          <Header />
          <main className={styles.mainContent}>
            {/* Renderize todas as seções diretamente aqui */}
            <AboutMe />
            <Experiences />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </Background>
      </div>
    );
  }

  // Tela inicial com o botão Start
  return (
    <div className={styles.playContainer}>
      <button className={styles.playButton} onClick={handleStartClick}>
        PLAY
      </button>
    </div>
  );
}
