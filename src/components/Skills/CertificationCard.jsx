import { motion } from "framer-motion";
import styles from "./CertificationCard.module.css";

export function CertificationCard({ cert, delay }) {
  return (
    <motion.div
      className={styles.certCard}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.certBadge}>🏅</div>
      <h4 className={styles.certName}>{cert.name}</h4>
      <div className={styles.certMeta}>
        <span className={styles.certIssuer}>{cert.issuer}</span>
        <span className={styles.certYear}>{cert.year}</span>
      </div>
    </motion.div>
  );
}
