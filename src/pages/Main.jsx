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

export function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);
  
  const handleStartClick = () => {
    setIsLoading(true);
  };

  const handleVideoEnd = () => {
    setIsLoading(false);
    setShowContent(true);
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
            {/* Renderize todas as seções diretamente aqui */}
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
          }, 100); // Pequeno delay para garantir montagem
        }}
      >
        PLAY
      </button>
    </div>
  );
}
