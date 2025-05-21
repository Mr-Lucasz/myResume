import { motion } from "framer-motion";
import styles from "./SoftSkillPill.module.css";

export function SoftSkillPill({ skill, delay }) {
  return (
    <motion.div
      className={styles.softSkillPill}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -3 }}
      style={{
        background: `rgba(193, 11, 111, ${skill.level / 150})`,
        border: `1px solid rgba(193, 11, 111, ${skill.level / 100})`,
      }}
    >
      {skill.name}
      <div className={styles.skillLevelIndicator}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={styles.levelDot}
            style={{
              opacity: i < Math.floor(skill.level / 20) ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
