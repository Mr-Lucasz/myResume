import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from "./Projects.module.css";

// Nenhum projeto real cadastrado ainda
const projectsData = [];

export function Projects() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      id="projects"
      className={styles.projectsSection}
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
          {t('projects_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className={styles.subtitle}
        >
          {t('projects_subtitle')}
        </motion.p>
      </div>

      <motion.div 
        className={styles.projectsGrid}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        {/* Banner de em construção */}
        <div className={styles.underConstruction}>
          <span role="img" aria-label="Em construção" className={styles.constructionIcon}>🚧</span>
          <span>Mais projetos em breve! (Em construção)</span>
        </div>
      </motion.div>
    </motion.section>
  );
}