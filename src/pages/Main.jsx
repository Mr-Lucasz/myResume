import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'; 
import { Background } from '../components/Background';
import { Header } from '../components/TopNavigation/Header';
import { LoadingScreen } from '../components/LoadingScreen.jsx';
import { AboutMe } from './sections/AboutMe.jsx';
import { Experiences } from './sections/Experiences.jsx';
import { Skills } from './sections/Skills.jsx';
import { Projects } from './sections/Projects.jsx';
import { Contact } from './sections/Contact.jsx';
import styles from './Main.module.css';
import AnimatedCursor from 'react-animated-cursor';

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
        {/* <Background> */}
        <AnimatedCursor color="193, 11, 111" />
        <Header />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Outlet /> {/* Agora as seções são renderizadas aqui */}
        </main>
        {/* </Background> */}
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
