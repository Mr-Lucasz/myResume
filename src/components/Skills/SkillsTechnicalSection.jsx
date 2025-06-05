import { motion } from "framer-motion";
import { Radar } from "react-chartjs-2";
import styles from "../../pages/sections/Skills.module.css";

export function SkillsTechnicalSection({ radarData, radarOptions, inView, t }) {
  return (
    <motion.div
      className={styles.skillCategory}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.6 }}
    >
      <h3 className={styles.categoryTitle}>
        <span className={styles.techIcon}>💻</span>{" "}
        {t("skills_technical_stack")}
      </h3>
      <div className={styles.radarChartContainer}>
        <Radar data={radarData} options={radarOptions} />
      </div>
    </motion.div>
  );
}
