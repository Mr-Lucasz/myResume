import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.css";
import Lottie from "lottie-react";
import animationData from "../../assets/AboutMe.json";
import { TypeAnimation } from "react-type-animation";

export function AboutMe() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="about"
      className={styles.sectionAbout}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.backgroundPattern} />
      <div className={styles.container}>
        <motion.aside
          className={styles.aside}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2 className={styles.glitchText} whileHover={{ scale: 1.05 }}>
            <span className={styles.gradientText}>Olá!</span>
            <br />
            <span className={styles.nameHighlight}>Lucas Rodrigues</span>
          </motion.h2>
          <TypeAnimation
            className={styles.subtitle}
            sequence={[
              "QA Sênior | Test Automation | Performance | Mobile | Web | APIs",
              1500,
              "Mentor de QA | Cultura Ágil | CI/CD | Cypress | K6 | Postman",
              1500,
              "Líder Técnico | OKRs | Mobile Testing | Mentoria",
              1500,
              "Qualidade de Software | Testes Funcionais e Não-Funcionais",
              1500,
            ]}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
          />
          <motion.p className={styles.description}>
            Sou apaixonado por qualidade, automação de testes e performance. Tenho
            experiência em projetos de transformação digital, liderança técnica e
            mentoria de equipes de QA.
          </motion.p>
          <div className={styles.buttonContainer}>
            <motion.button
              className={styles.contactButton}
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
            >
              Fale comigo
            </motion.button>
          </div>
        </motion.aside>
        <motion.div
          className={styles.lottieContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
      </div>
    </motion.section>
  );
}