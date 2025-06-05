import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";
import styles from "../../pages/sections/Skills.module.css";

export function SkillsTestAutomationSection({ skillsData, inView, t }) {
  return (
    <motion.div
      className={styles.skillCategory}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.4 }}
    >
      <h3 className={styles.categoryTitle}>
        <span className={styles.testIcon}>🤖</span>{" "}
        {t("skills_test_automation")}
      </h3>
      <div className={styles.skillsGrid}>
        {skillsData.qaTechnical.map((skill, index) => (
          <SkillBar key={index} skill={skill} delay={index * 0.1} />
        ))}
      </div>
    </motion.div>
  );
}
