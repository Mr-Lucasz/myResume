import styles from "./Skills.module.css";
import { useInView } from "react-intersection-observer";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dados mantidos iguais
const automationData = [
  { subject: "Selenium", A: 85, fullMark: 100 },
  { subject: "Cypress", A: 80, fullMark: 100 },
  { subject: "Cucumber", A: 75, fullMark: 100 },
  { subject: "K6", A: 70, fullMark: 100 },
  { subject: "Postman", A: 90, fullMark: 100 },
  { subject: "JMeter", A: 65, fullMark: 100 },
  { subject: "Java", A: 85, fullMark: 100 },
  { subject: "JavaScript", A: 80, fullMark: 100 },
];

const toolsData = [
  { name: "Zephyr Scale", years: 3 },
  { name: "GitLab", years: 4 },
  { name: "Azure DevOps", years: 5 },
  { name: "GitHub", years: 4 },
  { name: "Git", years: 6 },
  { name: "MongoDB", years: 2 },
  { name: "Supabase", years: 1 },
  { name: "MySQL", years: 5 },
  { name: "Postgres", years: 3 },
];

const skillsData = [
  { subject: "Arquiteturar Testes Automatizados", A: 85, fullMark: 100 },
  { subject: "Plano de Testes", A: 80, fullMark: 100 },
  { subject: "Execução de Testes", A: 75, fullMark: 100 },
  { subject: "Métricas/KPIs de Qualidade", A: 90, fullMark: 100 },
  { subject: "Rastreamento de Bugs", A: 85, fullMark: 100 },
  { subject: "Estratégias e Técnicas de Qualidade", A: 80, fullMark: 100 },
  { subject: "Capacitação de Juniores", A: 75, fullMark: 100 },
  { subject: "Comunicação", A: 90, fullMark: 100 },
];

export function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  // Função personalizada para o Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.tooltipLabel}>{label}</p>
          <p className={styles.tooltipValue}>
            {payload[0].name}: {payload[0].value}
            {payload[0].dataKey === "years" ? " anos" : "%"}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="skills" className={styles.sectionSkills} ref={ref} style={{ opacity: inView ? "1" : "0" }}>
      <h2>Skills</h2>
      <div className={styles.chartContainer}>
        <div className={styles.chartFrame}>
          <h3>Automação</h3>
          <p className={styles.chartDescription}>Proficiência em ferramentas e linguagens de automação</p>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={automationData}>
              <defs>
                <linearGradient id="automationGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#fff", fontSize: 12 }} />
              <PolarRadiusAxis tick={{ fill: "#fff", fontSize: 12 }} />
              <Radar name="Automação" dataKey="A" stroke="#8884d8" fill="url(#automationGradient)" fillOpacity={0.6} />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ color: "#fff", fontSize: 12 }}
                formatter={(value) => <span className={styles.legendText}>{value}</span>}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chartFrame}>
          <h3>Ferramentas e Plataformas</h3>
          <p className={styles.chartDescription}>Experiência em anos com diferentes ferramentas e plataformas</p>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={toolsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={70}
                tick={{ fill: "#fff", fontSize: 12 }}
              />
              <YAxis tick={{ fill: "#fff", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="top"
                align="center"
                wrapperStyle={{ color: "#fff", fontSize: 12 }}
                formatter={(value) => <span className={styles.legendText}>{value}</span>}
              />
              <Bar dataKey="years" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chartFrame}>
          <h3>Habilidades de QA e Soft Skills</h3>
          <p className={styles.chartDescription}>Proficiência em processos de QA e habilidades interpessoais</p>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis
                dataKey="subject"
                angle={-45}
                textAnchor="end"
                height={70}
                tick={{ fill: "#fff", fontSize: 12 }}
              />
              <YAxis domain={[0, 100]} tick={{ fill: "#fff", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="top"
                align="center"
                wrapperStyle={{ color: "#fff", fontSize: 12 }}
                formatter={(value) => <span className={styles.legendText}>{value}</span>}
              />
              <Bar dataKey="A" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className={styles.note}>Nota: As pontuações representam autoavaliação de proficiência em uma escala de 0 a 100.</p>
    </section>
  );
}