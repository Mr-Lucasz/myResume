import styles from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <section id="about" className={styles.sectionAbout}>
      <h2>About me</h2>
      <p className={styles.paragraph}>
        Im a front-end developer with a passion for creating beautiful and
        intuitive user interfaces. I have experience working with modern
        technologies like React.
      </p>
    </section>
  );
}
