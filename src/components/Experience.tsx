import type { IconName } from "./Icon"
import Icon from "./Icon"
import { SectionHeading } from "./Section"

type Experience = {
  company: { name: string; logo: IconName; logo_alt: string }
  role: string
  location: string
  date: string
  points: string[]
}

const experiences: Experience[] = [
  {
    company: { name: "Gotedo LLC", logo: "gotedo", logo_alt: "GO" },
    role: "Backend Engineer",
    location: "Lagos, Nigeria",
    date: "02.2024 - 02.2026",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

      <time
        dateTime=""
        className="justify-self-start col-span-full mt-1 text-muted text-sm py-2 px-3 bg-accent-soft rounded-full font-bold md:justify-self-stretch md:col-span-1"
      >
        {experience.date}
      </time>
    </div>

    <ul className="list-bullet">
      {experience.points.map((point, index) => (
        <li key={index}>{point}</li>
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
        title="Shipping systems that hold up in production"
        copy="Two years of hands-on ownership, from schema design and API architecture to the systems that keep services running reliably in production."
      />

      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </>
  )
}

export default Experience
