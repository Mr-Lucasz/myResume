import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from "./Projects.module.css";

// Dados de exemplo - substitua com seus projetos reais
const projectsData = [
  {
    title: "Blog Pessoal",
    description: "Um blog moderno com sistema de autenticação e CMS integrado.",
    tags: ["React", "Node.js", "MongoDB", "GraphQL"],
    image: "/blog-project.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "Portfólio Interativo",
    description: "Site portfólio com animações 3D e modo escuro/claro.",
    tags: ["Three.js", "GSAP", "SASS", "React"],
    image: "/portfolio-project.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "Aplicativo de Tarefas",
    description: "App para gerenciamento de tarefas com sincronização em nuvem.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/todo-project.jpg",
    link: "#",
    github: "#"
  }
];

export function Projects() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      id="projects"
      className={styles.projectsSection}
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
          {t('projects_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className={styles.subtitle}
        >
          {t('projects_subtitle')}
        </motion.p>
      </div>

      <motion.div 
        className={styles.projectsGrid}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
}

function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  return (
    <motion.div
      className={styles.projectCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
    >
      <div className={styles.projectImage}>
        <img src={project.image} alt={project.title} />
        <div className={styles.projectOverlay} />
      </div>
      <div className={styles.projectContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          <a href={project.link} className={styles.demoLink}>
            {t('projects_live_demo')}
          </a>
          <a href={project.github} className={styles.codeLink}>
            {t('projects_view_code')}
          </a>
        </div>
      </div>
    </motion.div>
  );
}