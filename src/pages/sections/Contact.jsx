import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      id="contact"
      className={styles.contactSection}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.header}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className={styles.title}
        >
          {t('contact_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className={styles.subtitle}
        >
          {t('contact_subtitle')}
        </motion.p>
      </div>

      <div className={styles.contactContent}>
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3>{t('contact_info_title')}</h3>
          <p>{t('contact_info_subtitle')}</p>
          
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📧</div>
              <div>
                <h4>{t('contact_email')}</h4>
                <a href="mailto:l.cunha14.lc@gmail.com">l.cunha14.lc@gmail.com</a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>💼</div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🐙</div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className={styles.contactForm}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">{t('contact_form_name')}</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">{t('contact_form_email')}</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="subject">{t('contact_form_subject')}</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">{t('contact_form_message')}</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('contact_form_send')}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}