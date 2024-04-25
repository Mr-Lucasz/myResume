import styles from "./Experiences.module.css";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export function Experiences() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#about", {
      opacity: 1, // Altera a opacidade para 0
      scrollTrigger: {
        trigger: "#experiences", //
        start: "top center", 
        end: "bottom bottom",
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf("#about");
    };
}, []);
  
  
    return (
    <section id="experiences" className={styles.sectionExperiences}>
      <h2>Experiencies</h2>
      <p className={styles.paragraph}>
        Im a front-end developer with a passion for creating beautiful and
        intuitive user interfaces. I have experience working with modern
        technologies like React.
      </p>
    </section>
  );
}
