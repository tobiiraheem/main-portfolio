import { technologies } from "../constants"
import { SectionHeading } from "./Section"

const skills: Record<string, string[]> = {
  "Backend & DB": ["Node.js", "Go", "SQL", "PostgreSQL"],
  DevOps: ["AWS", "Docker", "Cloudfare", "Prometheus", "Grafana"],
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
            key={index}
            className="p-7 bg-surface border border-border rounded-2xl"
          >
            <span className="text-accent text-[.65rem] font-bold">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <h3 className="mt-3 mb-5 font-bold font-display">{skillGroup}</h3>

            <div className="flex flex-wrap gap-2">
              {skillItems.map((skillItem, idx) => (
                <p
                  key={skillGroup + skillItem + idx}
                  className="m-0 py-2 px-3 text-muted bg-surface-2 rounded-md text-[.65rem]"
                >
                  {skillItem}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Skills
