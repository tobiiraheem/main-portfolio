import { SectionHeading } from "./Section"

const skills: Record<string, string[]> = {
  "Languages & Backend": [
    "TypeScript",
    "Python",
    "Go",
    "JavaScript",
    "Node.js",
    "AdonisJS",
    "Express.js",
    "NestJS",
    "API Design",
    "Authentication",
  ],

  "Frontend & Applications": [
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "TailwindCSS",
    "Responsive UI Development",
  ],

  "Databases & Data Access": [
    "SQL",
    "PostgreSQL",
    "Schema Design",
    "Query Optimization",
    "Database Migrations",
  ],

  "AI/ML & Experimentation": [
    "Python",
    "PyTorch",
    "torchaudio",
    "Hugging Face",
    "CNN",
    "Residual Networks (ResNet)",
    "LaTeX",
  ],

  "Cloud & DevOps": [
    "Docker",
    "Linux",
    "Cloudflare",
    "AWS",
    "CI/CD",
    "Containerized Workflows",
  ],

  "Observability & Performance": [
    "Prometheus",
    "Grafana",
    "Structured Logging",
    "Caching Strategies",
    "Query Performance Analysis",
    "API Performance Optimization",
  ],
}

const Skills = () => {
  return (
    <div>
      <SectionHeading
        label="Technical toolkit"
        title="A practical, production-ready stack."
        copy="The tools I use to build, ship, and keep systems running."
      />

      <div className="grid grid-cols-[1fr] md:grid-cols-[repeat(2,1fr)] gap-4">
        {Object.entries(skills).map(([skillGroup, skillItems], index) => (
          <article
            key={skillGroup}
            className="p-7 bg-surface border border-border rounded-2xl"
          >
            <span className="text-accent text-[.65rem] font-bold">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <h3 className="mt-3 mb-5 font-bold font-display">{skillGroup}</h3>

            <div className="flex flex-wrap gap-2">
              {skillItems.map((skillItem) => (
                <span
                  key={skillGroup + skillItem}
                  className="m-0 py-2 px-3 text-muted bg-surface-2 rounded-md text-[.65rem]"
                >
                  {skillItem}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Skills
