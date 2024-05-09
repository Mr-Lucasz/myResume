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

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <input id="message" name="message" required></input>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
