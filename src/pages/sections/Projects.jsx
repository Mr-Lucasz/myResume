import styles from "./Projects.module.css";
import { useInView } from 'react-intersection-observer';

export function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  
    return (
    <section id="projects" className={styles.sectionProjects} ref={ref} style={{ opacity: inView ? "1" : "0" }}>
      <h2>Projects</h2>
      <p className={styles.paragraph}>
        I have worked on a number of projects, including a personal blog and a
        portfolio website. I am always looking for new projects to work on, so
        feel free to get in touch if you have any ideas.
      </p>
    </section>
  );
}
