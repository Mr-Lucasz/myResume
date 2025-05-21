import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from "./Skills.module.css";

const skillsData = {
  qaTechnical: [
    { name: "Cypress (BDD/TDD)", level: 90, icon: "🔍" },
    { name: "API Testing (REST)", level: 88, icon: "🔌" },
    { name: "K6 (Performance)", level: 80, icon: "⚡" },
    { name: "Selenium WebDriver", level: 75, icon: "🤖" },
    { name: "Postman/Newman", level: 85, icon: "📬" },
    { name: "Zephyr Scale", level: 78, icon: "📊" }
  ],
  programming: [
    { name: "JavaScript/TS", level: 85, icon: "📜" },
    { name: "Java", level: 70, icon: "☕" },
    { name: "SQL", level: 80, icon: "🗃️" },
    { name: "Node.js", level: 75, icon: "🟢" },
    { name: "React (Testing)", level: 65, icon: "⚛️" },
    { name: "Git", level: 90, icon: "🐙" }
  ],
  qaProcess: [
    { name: "Test Strategy", level: 92, icon: "🧠" },
    { name: "Agile QA", level: 90, icon: "🔄" },
    { name: "CI/CD Pipelines", level: 85, icon: "⚙️" },
    { name: "Shift-Left", level: 88, icon: "⬅️" },
    { name: "Risk Analysis", level: 86, icon: "⚠️" },
    { name: "Root Cause", level: 91, icon: "🔎" }
  ],
  leadership: [
    { name: "QA Mentoring", level: 89 },
    { name: "Stakeholder Mgmt", level: 85 },
    { name: "Process Improvement", level: 87 },
    { name: "Quality Advocacy", level: 90 }
  ],
  certifications: [
    { name: "ISTQB Advanced (Em andamento)", issuer: "ISTQB", year: "2024" },
    { name: "Postman API Expert", issuer: "Postman", year: "2023" },
    { name: "Performance Testing with K6", issuer: "Udemy", year: "2023" },
    { name: "Azure DevOps Pipelines", issuer: "Microsoft", year: "2023" },
    { name: "BDD with Cucumber", issuer: "QASkills", year: "2022" }
  ]
};

export function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
          Senior QA competencies visualized through technical depth and quality leadership
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
          <div className={styles.skillsGrid}>
            {skillsData.programming.map((skill, index) => (
              <RadialSkill key={index} skill={skill} delay={index * 0.1} />
            ))}
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
        </motion.div>
      </div>
    </motion.section>
  );
}


// Componente de Barra de Skill
function SkillBar({ skill, delay }) {
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

// Componente de Skill Radial
function RadialSkill({ skill, delay }) {
  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      className={styles.radialSkill}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
    >
      <svg className={styles.radialSvg} width="80" height="80" viewBox="0 0 80 80">
        <circle
          className={styles.radialBackground}
          cx="40"
          cy="40"
          r="30"
          strokeWidth="6"
        />
        <motion.circle
          className={styles.radialProgress}
          cx="40"
          cy="40"
          r="30"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, delay: delay + 0.3 }}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
        />
      </svg>
      <div className={styles.radialInfo}>
        <span className={styles.radialIcon}>{skill.icon}</span>
        <span className={styles.radialName}>{skill.name}</span>
        <span className={styles.radialPercent}>{skill.level}%</span>
      </div>
    </motion.div>
  );
}

// Componente de Soft Skill
function SoftSkillPill({ skill, delay }) {
  return (
    <motion.div
      className={styles.softSkillPill}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -3 }}
      style={{
        background: `rgba(193, 11, 111, ${skill.level / 150})`,
        border: `1px solid rgba(193, 11, 111, ${skill.level / 100})`
      }}
    >
      {skill.name}
      <div className={styles.skillLevelIndicator}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={styles.levelDot}
            style={{
              opacity: i < Math.floor(skill.level / 20) ? 1 : 0.3
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Componente de Certificação
function CertificationCard({ cert, delay }) {
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