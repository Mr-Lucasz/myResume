import { useInView } from "react-intersection-observer";
import styles from "./AboutMe.module.css";
import Lottie from "lottie-react";
import animationData from "../../assets/AboutMe.json";
import { TypeAnimation } from "react-type-animation";
import { AwesomeButton } from "react-awesome-button";

export function AboutMe() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className={styles.sectionAbout}
      ref={ref}
      style={{ opacity: inView ? "1" : "0" }}
    >
      <div className={styles.container}>
        <aside className={styles.aside}>
          <h2>Heys Guys, I&apos; m Lucas Rodrigues! 😎</h2>
          <TypeAnimation
            className={styles.subtitle}
            sequence={[
              "I'm a Software Quality Analyst.",
              "I'm a Enginner Software. 7/8",
              "I'm a technology enthusiast.",
            ]}
            wrapper="h3"
            speed={20}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </aside>
        {/* <aside className={styles.aside2}>
          <Lottie animationData={animationData} />
        </aside> */}
      </div>
      <button
        className={styles.playButton}
        onClick={() => console.log("Cliquei!")}
      >
        CONTACT ME
      </button>
    </section>
  );
}
