import type { IconName } from "./Icon"
import Icon from "./Icon"
import { SectionHeading } from "./Section"

type Experience = {
  company: { name: string; logo: IconName }
  role: string
  location: string
  date: string
  points: string[]
}

const experiences: Experience[] = [
  {
    company: { name: "Gotedo LLC", logo: "gotedo" },
    role: "Backend Engineer",
    location: "Lagos, Nigeria",
    date: "02.2024 - 02.2026",
    points: [
      "Designed and shipped a multi-product, multi-tier, region-based subscription system with support for auto-renewals, cancellations, and refunds, owning the full billing lifecycle.",
      "Improved platform API performance through query optimization, Redis caching, and background job processing, reducing p95 latency by 33% and doubling throughput.",
      "Collaborated with product and design teams to scope and deliver features end-to-end, from schema design to deployment.",
    ],
  },
]

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <article className="p-[clamp(1.5rem,4vw,2.6rem)] border  rounded-2xl shadow-card experience-card">
    <div className="grid grid-cols-[auto_1fr] gap-4 items-center pb-7 border-b border-b-border md:grid-cols-[auto_1fr_auto]">
      <span className="grid place-items-center size-12 shrink-0  rounded-xl bg-accent-soft text-accent">
        <Icon name={experience.company.logo} size={32} variant="fill" />
      </span>

      <div>
        <h3 className="m-0 font-bold text-[1.2rem] font-display">
          {experience.role}
        </h3>
        <p className="mt-1 text-muted text-sm">
          {experience.company.name} - {experience.location}
        </p>
      </div>

      <time className="justify-self-start col-span-full mt-1 text-muted text-sm py-2 px-3 bg-accent-soft rounded-full font-bold md:justify-self-stretch md:col-span-1">
        {experience.date}
      </time>
    </div>

    <ul className="list-bullet">
      {experience.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
)

const Experience = () => {
  return (
    <>
      <SectionHeading
        key="experience-section-heading"
        label="Experience"
        title="Shipping systems that hold up in production."
        copy="Two years of hands-on ownership, from schema design and API architecture to the systems that keep services running reliably in production."
      />

      {experiences.map((experience, index) => (
        <ExperienceCard
          key={`${experience.company.name}-${experience.role}`}
          experience={experience}
        />
      ))}
    </>
  )
}

export default Experience
