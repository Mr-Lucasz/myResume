/* ExperienceTimeline.js */
import { useTranslation } from "react-i18next";
import { getExperienceData } from "../data/experienceData";
import { ExperienceItem } from "./ExperienceItem";
import styles from "./ExperienceTimeline.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function ExperienceTimeline() {
  const { t } = useTranslation();
  const experienceData = getExperienceData(t);
  const [openIdx, setOpenIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setOpenIdx(null); // Fecha todos ao trocar modo
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

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
            <div className={styles.timelineDotModern}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10" stroke="#0bc1a8" strokeWidth="2.5" fill="#fff" />
                <circle cx="11" cy="11" r="5" fill={idx % 2 === 0 ? '#c10b6f' : '#0bc1a8'} />
              </svg>
            </div>
            {isMobile ? (
              <div className={styles.collapseRow}>
                <button
                  className={styles.collapseButtonModern}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIdx === idx}
                  aria-controls={`exp-item-${idx}`}
                >
                  <span className={styles.collapseTitle}><span className={styles.cargo}>{item.role}</span> <span className={styles.company}>{item.company}</span></span>
                  <span className={styles.collapseArrowModern} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9l5 5 5-5" stroke="#0bc1a8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
            ) : null}
            <motion.div layout transition={{ duration: 0.4 }}>
              {(!isMobile || openIdx === idx) && (
                <div id={`exp-item-${idx}`}>
                  <ExperienceItem item={item} idx={idx} />
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}