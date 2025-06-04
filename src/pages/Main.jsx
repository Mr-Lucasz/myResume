import React, { useRef, useState, Suspense } from "react";
import { Header } from "../components/TopNavigation/Header";
import { LoadingScreen } from "../components/LoadingScreen";
const Background = React.lazy(() => import("../components/Background"));
import { AboutMe } from "./sections/AboutMe";
import { Experiences } from "./sections/Experiences";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import styles from "./Main.module.css";
import AnimatedCursor from "react-animated-cursor";
import { useTranslation } from "react-i18next";

export function Main() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);

  const handleStartClick = () => setIsLoading(true);
  const handleVideoEnd = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  if (isLoading && !showContent) {
    return (
      <LoadingScreen onVideoEnd={handleVideoEnd} videoRef={videoRef} />
    );
  }

  if (showContent) {
    return (
      <Suspense fallback={<div>Carregando...</div>}>
        <Background>
          <div className={styles.page}>
            <AnimatedCursor color="193, 11, 111" />
            <Header />
            <main className={styles.mainContent}>
              {/* <h1>{t("welcome")}</h1> */}
              <AboutMe />
              <Experiences />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
        </Background>
      </Suspense>
    );
  }

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
        {t("play_button")}
      </button>
    </div>
  );
}
