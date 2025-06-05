import { motion } from "framer-motion";
import { CertificationCard } from "./CertificationCard";
import styles from "../../pages/sections/Skills.module.css";

export function SkillsCertificationsSection({ skillsData, inView, t }) {
  return (
    <motion.div
      className={styles.certifications}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 1.2 }}
    >
      <h3 className={styles.categoryTitle}>
        <span className={styles.certIcon}>🏆</span>{" "}
        {t("skills_certifications")}
      </h3>
      <div className={styles.certificationsGrid}>
        {skillsData.certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} delay={index * 0.15} />
        ))}
      </div>
      <div className={styles.certLink}>
        <a
          href="https://www.linkedin.com/in/lrodrigues21/details/certifications/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAABt0O_MBDAIn36Qf8UnEYh_Agr8RcJWcJGg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("skills_view_all_certifications")}
        </a>
      </div>
    </motion.div>
  );
}
