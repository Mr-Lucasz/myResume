import { useRef, useState } from "react";
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
import { useTranslation } from 'react-i18next';

export function Main() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  // Verifica se já foi exibido o vídeo de introdução
  const [showContent, setShowContent] = useState(() => {
    return localStorage.getItem('introSeen') === 'true';
  });
  const videoRef = useRef(null);

  const handleStartClick = () => {
    setIsLoading(true);
  };

  const handleVideoEnd = () => {
    setIsLoading(false);
    setShowContent(true);
    localStorage.setItem('introSeen', 'true');
  };

  if (isLoading && !showContent) {
    return (
      <LoadingScreen
        onVideoEnd={handleVideoEnd}
        videoRef={videoRef}
      />
    );
  }

  if (showContent) {
    return (
      <>
        <Background />
        <div className={styles.page}>
          <AnimatedCursor color="193, 11, 111" />
          <Header />
          <main className={styles.mainContent}>
            <AboutMe />
            <Experiences />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </>
    );
  }

  // Tela inicial com o botão Start
  return (
    <div className={styles.playContainer}>
      <AnimatedCursor color="193, 11, 111" />
      <button
        className={styles.playButton}
        onClick={() => {
          handleStartClick();
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.play();
            }
          }, 100);
        }}
      >
        {t('play_button')}
      </button>
    </div>
  );
}
