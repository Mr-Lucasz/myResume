import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import styles from "./Skills.module.css";
import { skillsData } from "../../data/skillsData"; // Assuming you have a separate file for skills data
import { SkillBar } from "../../components/Skills/SkillBar";
import { SoftSkillPill } from "../../components/Skills/SoftSkillPill";
import { CertificationCard } from "../../components/Skills/CertificationCard";

export function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const radarData = {
    labels: skillsData.programming.map((skill) => skill.name),
    datasets: [
      {
        label: "Technical Stack",
        data: skillsData.programming.map((skill) => skill.level),
        backgroundColor: "rgba(193, 11, 111, 0.2)",
        borderColor: "rgba(193, 11, 111, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(193, 11, 111, 1)",
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: {
          font: {
            size: 14,
            weight: "bold",
            color: "#ffff",
            backgroundColor: "rgba(193, 11, 111, 0.5)",
          },
        },
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className={styles.skillsSection}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.header}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className={styles.title}
        >
          QA <span className={styles.highlight}>Expertise</span> Matrix
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className={styles.subtitle}
        >
          Senior QA competencies visualized through technical depth and quality
          leadership
        </motion.p>
      </div>

      <div className={styles.dashboard}>
        {/* Seção de Test Automation */}
        <motion.div
          className={styles.skillCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className={styles.categoryTitle}>
            <span className={styles.testIcon}>🤖</span> Test Automation
          </h3>
          <div className={styles.skillsGrid}>
            {skillsData.qaTechnical.map((skill, index) => (
              <SkillBar key={index} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Seção de Technical Skills */}
        <motion.div
          className={styles.skillCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className={styles.categoryTitle}>
            <span className={styles.techIcon}>💻</span> Technical Stack
          </h3>
          <div className={styles.radarChartContainer}>
            <Radar data={radarData} options={radarOptions} />
          </div>
        </motion.div>

        {/* Seção de QA Process */}
        <motion.div
          className={styles.skillCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className={styles.categoryTitle}>
            <span className={styles.qaIcon}>🛠️</span> QA Methodology
          </h3>
          <div className={styles.skillsGrid}>
            {skillsData.qaProcess.map((skill, index) => (
              <SkillBar key={index} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Seção de Leadership */}
        <motion.div
          className={styles.skillCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <h3 className={styles.categoryTitle}>
            <span className={styles.leadIcon}>🚀</span> QA Leadership
          </h3>
          <div className={styles.softSkillsContainer}>
            {skillsData.leadership.map((skill, index) => (
              <SoftSkillPill key={index} skill={skill} delay={index * 0.15} />
            ))}
          </div>
        </motion.div>

        {/* Seção de Certificações */}
        <motion.div
          className={styles.certifications}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <h3 className={styles.categoryTitle}>
            <span className={styles.certIcon}>🏆</span> Certifications
          </h3>
          <div className={styles.certificationsGrid}>
            {skillsData.certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} delay={index * 0.15} />
            ))}
          </div>
          <div className={styles.certLink}>
            <a
              href="https://www.linkedin.com/in/lrodrigues21/details/certifications/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAABt0O_MBDAIn36Qf8UnEYh_Agr8RcJWcJGg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Certifications
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
