import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "chart.js/auto";
import styles from "./Skills.module.css";
import { skillsData } from "../../data/skillsData"; // Assuming you have a separate file for skills data
import { SkillsTestAutomationSection } from "../../components/Skills/SkillsTestAutomationSection";
import { SkillsTechnicalSection } from "../../components/Skills/SkillsTechnicalSection";
import { SkillsQAProcessSection } from "../../components/Skills/SkillsQAProcessSection";
import { SkillsLeadershipSection } from "../../components/Skills/SkillsLeadershipSection";
import { SkillsCertificationsSection } from "../../components/Skills/SkillsCertificationsSection";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const radarData = {
    labels: skillsData.programming.map((skill) => skill.name),
    datasets: [
      {
        label: "Technical Stack",
        data: skillsData.programming.map((skill) => skill.level),
        backgroundColor: "rgba(193, 11, 111, 0.2)",
        borderColor: "#ff70d9", // Linha mais clara
        borderWidth: 2,
        pointBackgroundColor: "#ff70d9", // Pontos mais claros também
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
          color: "#fff", // Nome dos KPIs mais visível
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(255,255,255,0.2)", // Linhas da grade mais claras
        },
        ticks: {
          color: "#fff", // Números do eixo mais visíveis
          backdropColor: "transparent",
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
          {t("skills_title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className={styles.subtitle}
        >
          {t("skills_subtitle")}
        </motion.p>
      </div>
      <div className={styles.dashboard}>
        <SkillsTestAutomationSection
          skillsData={skillsData}
          inView={inView}
          t={t}
        />
        <SkillsTechnicalSection
          radarData={radarData}
          radarOptions={radarOptions}
          inView={inView}
          t={t}
        />
        <SkillsQAProcessSection
          skillsData={skillsData}
          inView={inView}
          t={t}
        />
        <SkillsLeadershipSection
          skillsData={skillsData}
          inView={inView}
          t={t}
        />
        <SkillsCertificationsSection
          skillsData={skillsData}
          inView={inView}
          t={t}
        />
      </div>
    </motion.section>
  );
}
