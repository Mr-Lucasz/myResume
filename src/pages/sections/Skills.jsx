import styles from "./Skills.module.css";
import { useInView } from 'react-intersection-observer';

export function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  
    return (
    <section id="skills" className={styles.sectionExperiences} ref={ref} style={{ opacity: inView ? "1" : "0" }}>
      <h2>Skills</h2>
      <p className={styles.paragraph}>
        Im a front-end developer with a passion for creating beautiful and
        intuitive user interfaces. I have experience working with modern
        technologies like React.
      </p>
    </section>
  );
}
