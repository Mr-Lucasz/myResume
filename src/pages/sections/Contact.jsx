import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.sectionContact}>
      <h2>Contact</h2>
      <p className={styles.paragraph}>
        If you would like to get in touch, please feel free to send me an email
        at{" "}
        <a
          href="mailto: l.cunha14.lc@gmail.com

            "
        ></a>
      </p>
    </section>
  );
}
