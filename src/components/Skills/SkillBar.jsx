import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./SkillBar.module.css";

export function SkillBar({ skill, delay }) {
  return (
    <motion.div
      className={styles.skillBarContainer}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className={styles.skillInfo}>
        <span className={styles.skillIcon}>{skill.icon}</span>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPercent}>{skill.level}%</span>
      </div>
      <div className={styles.skillBarBackground}>
        <motion.div
          className={styles.skillBarFill}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.3, type: "spring" }}
          style={{ background: `linear-gradient(90deg, #c10b6f, #0bc1a8)` }}
        />
      </div>
    </motion.div>
  );
}

SkillBar.propTypes = {
  skill: PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  delay: PropTypes.number,
};
