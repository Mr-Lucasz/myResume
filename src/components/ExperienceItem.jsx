/* ExperienceItem.js */
import styles from "./ExperienceItem.module.css";
import { motion } from "framer-motion";

export function ExperienceItem({ item }) {
  return (
    <div className={styles.item}>
      <motion.div 
        className={styles.logo}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src={item.logo} alt={item.company} />
      </motion.div>
      <motion.div 
        className={styles.card}
        whileHover={{ y: -5 }}
      >
        <div className={styles.cardHeader}>
          <h3>{item.role}</h3>
          <span className={styles.company}>{item.company}</span>
          <span className={styles.period}>
            {item.period} · {item.location}
          </span>
        </div>
        
        <ul className={styles.description}>
          {item.description.map((line, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              {line}
            </motion.li>
          ))}
        </ul>
        
        <div className={styles.badges}>
          {item.skills.map((skill, i) => (
            <motion.span 
              key={i} 
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i, type: "spring" }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}