import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.css";
import Lottie from "lottie-react";
import animationData from "../../assets/AboutMe.json";
import { TypeAnimation } from "react-type-animation";

export function AboutMe() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  function handleContactClick() {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <motion.section
      id="about"
      className={styles.sectionAbout}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.backgroundPattern}></div>
      
      <div className={styles.container}>
        <motion.aside 
          className={styles.aside}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2 
            className={styles.glitchText}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.gradientText}>Hello, I'm</span><br/>
            <span className={styles.nameHighlight}>Lucas Rodrigues</span>
          </motion.h2>

          <TypeAnimation
            className={styles.subtitle}
            sequence={[
              "Software Quality Analyst",
              1500,
              "QA Automation Engineer",
              1500,
              "Technology Enthusiast",
              1500,
              "Problem Solver",
              1500
            ]}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
          />

          <motion.p className={styles.description}>
            With a passion for creating flawless digital experiences and ensuring 
            software excellence through meticulous testing and automation. 
            Combining technical expertise with creative problem-solving to 
            deliver top-notch quality solutions.
          </motion.p>

          <div className={styles.buttonContainer}>
            <motion.button 
              className={styles.contactButton}
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Connect</span>
              <div className={styles.buttonHoverEffect}></div>
            </motion.button>

            <motion.a 
              href="#projects" 
              className={styles.projectsButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.aside>

        <motion.aside 
          className={styles.aside2}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.animationContainer}>
            <Lottie 
              animationData={animationData} 
              className={styles.lottieAnimation}
            />
            <div className={styles.animationGlow}></div>
          </div>
        </motion.aside>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          ↓
        </motion.div>
      </div>
    </motion.section>
  );
}