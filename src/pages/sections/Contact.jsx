import styles from "./Contact.module.css";
import { useInView } from 'react-intersection-observer';

export function Contact() {

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section id="contact" className={styles.sectionContact}  ref={ref} style={{ opacity: inView ? "1" : "0" }}>
      <h2>Contact</h2>
      <p className={styles.paragraph}>
        If you would like to get in touch, please feel free to send me an email
        at{" "}
        <a
          href="mailto: l.cunha14.lc@gmail.com"
        ></a>
      </p>
    </section>
  );
}
