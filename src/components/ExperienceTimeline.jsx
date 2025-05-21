/* ExperienceTimeline.js */
import { experienceData } from "../data/experienceData";
import { ExperienceItem } from "./ExperienceItem";
import styles from "./ExperienceTimeline.module.css";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {experienceData.map((item, idx) => (
          <motion.div 
            key={idx} 
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className={styles.timelineDot}></div>
            <ExperienceItem item={item} idx={idx} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}