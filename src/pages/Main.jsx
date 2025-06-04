import React, { useRef, useState } from "react";
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
      <>
        <Background />
        <div className={styles.page}>
          <AnimatedCursor color="193, 11, 111" />
          <Header />
          <main className={styles.mainContent}>
            <h1>Bem-vindo!</h1>
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

  return (
    <LoadingScreen onVideoEnd={handleVideoEnd} videoRef={videoRef} />
  );
}
