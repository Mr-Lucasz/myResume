import { motion } from "framer-motion";
import { SoftSkillPill } from "./SoftSkillPill";
import styles from "../../pages/sections/Skills.module.css";

export function SkillsLeadershipSection({ skillsData, inView, t }) {
  return (
    <motion.div
      className={styles.skillCategory}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 1 }}
    >
      <h3 className={styles.categoryTitle}>
        <span className={styles.leadIcon}>🚀</span>{" "}
        {t("skills_qa_leadership")}
      </h3>
      <div className={styles.softSkillsContainer}>
        {skillsData.leadership.map((skill, index) => (
          <SoftSkillPill key={index} skill={skill} delay={index * 0.15} />
        ))}
      </div>
    </motion.div>
  );
}
