/* ExperienceTimeline.js */
import { useTranslation } from "react-i18next";
import { getExperienceData } from "../data/experienceData";
import { ExperienceItem } from "./ExperienceItem";
import styles from "./ExperienceTimeline.module.css";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  const { t } = useTranslation();
  const experienceData = getExperienceData(t);
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
            <div className={styles.timelineDot}>
              {/* Ícone SVG simples para o marcador */}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4" stroke="#c10b6f" strokeWidth="1.5" fill="#fff" />
                <circle cx="5" cy="5" r="2" fill={idx % 2 === 0 ? '#c10b6f' : '#0bc1a8'} />
              </svg>
            </div>
            <ExperienceItem item={item} idx={idx} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}