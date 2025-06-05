import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";
import styles from "../../pages/sections/Skills.module.css";

export function SkillsQAProcessSection({ skillsData, inView, t }) {
  return (
    <motion.div
      className={styles.skillCategory}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.8 }}
    >
      <h3 className={styles.categoryTitle}>
        <span className={styles.qaIcon}>🛠️</span>{" "}
        {t("skills_qa_methodology")}
      </h3>
      <div className={styles.skillsGrid}>
        {skillsData.qaProcess.map((skill, index) => (
          <SkillBar key={index} skill={skill} delay={index * 0.1} />
        ))}
      </div>
    </motion.div>
  );
}
