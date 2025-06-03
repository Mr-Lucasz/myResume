import { useInView } from "react-intersection-observer";
import { ExperienceTimeline } from "../../components/ExperienceTimeline";
import styles from "./Experiences.module.css";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export function Experiences() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      id="experiences"
      className={styles.sectionExperiences}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.header}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <span className={styles.titleHighlight}>{t('experiences_title_highlight')}</span> {t('experiences_title')}
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {t('experiences_subtitle')}
        </motion.p>
      </div>
      <ExperienceTimeline />
    </motion.section>
  );
}