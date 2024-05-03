import { useInView } from 'react-intersection-observer';
import styles from "./AboutMe.module.css";

export function AboutMe() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section id="about" className={styles.sectionAbout} ref={ref} style={{ opacity: inView ? "1" : "0" }}>
      <h2>About me</h2>
      <p className={styles.paragraph}>
        Im a front-end developer with a passion for creating beautiful and
        intuitive user interfaces. I have experience working with modern
        technologies like React.
      </p>
    </section>
  );
}