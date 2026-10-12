import Icon from "./Icon"
import { SectionHeading } from "./Section"

type Project = {
  title: string
  type: string
  description: string
  points: string[]
  impacts: string[]
  tools: string[]
  github?: string
  website?: string
}

type ProjectCardProps = { project: Project; index: number }

const projects: Project[] = [
  {
    title: "Gotedo Platform",
    type: "Backend Engineering · API Performance & Subscription Systems",
    description:
      "A church management Platform that provides a wide range of tools for church administration with a dynamic social media experience.",
    impacts: [
      "-33% p95 API latency",
      "2.3x API throughput",
      "-40% DB query execution time",
    ],
    points: [
      "Designed a proprietary multi-product, multi-tier, region-based billing model supporting auto-renewals, cancellations, and refunds across the full subscription lifecycle.",
      "Improved platform API performance through query optimization, caching, and background job processing, validated with a test-driven approach across the service layer.",
    ],
    tools: ["AdonisJS", "PostgreSQL", "Redis", "Docker", "PgBoss"],
    website: "https://about.gotedo.com",
  },
  {
    title: "GambitCNN",
    type: "Deep Learning · Environmental Sound Classification",
    description:
      "A ResNet-inspired convolutional neural network that classifies environmental audio into 50 categories, trained on Mel spectrograms of the ESC-50 dataset.",
    impacts: ["81.75% validation accuracy", "50-class classification"],
    points: [
      "Built an end-to-end audio classification pipeline covering dataset preparation, audio preprocessing, Mel spectrogram generation, model training, and inference.",
      "Implemented residual learning blocks inspired by ResNet, training a CNN on spectrogram representations of environmental audio.",
      "Trained on 1,600 samples with a 400-sample validation split, reaching 81.75% validation accuracy at epoch 88.",
    ],
    tools: [
      "Python",
      "PyTorch",
      "torchaudio",
      "CNN",
      "ResNet",
      "ESC-50",
      "CUDA",
      "Kaggle",
    ],
    github: "https://github.com/tobiiraheem/gambit_cnn",
  },
]

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <article className="project-card flex flex-col p-[clamp(1.5rem,3vw,2.2rem)] border rounded-2xl shadow-[0_15px_45px_rgba(32,58,90,0.05)] transition-[transform,box-shadow,border-color] duration-200 overflow-hidden hover:-translate-y-2 hover:border-accent hover:shadow-card">
      <div className="flex items-center justify-between gap-8">
        <span className="text-accent text-[1rem] font-bold font-display">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <p className="text-muted text-[.75rem] tracking-tighter uppercase">
          {project.type}
        </p>
      </div>

      <h3 className="mt-6 mb-3 text-[1.75rem] font-bold font-display tracking-tight">
        {project.title}
      </h3>
      <p className="text-muted leading-[1.7]">{project.description}</p>

      <ul className="list-bullet text-[.75rem] flex-1">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.impacts.map((impact) => (
          <strong
            key={impact}
            className="py-1 px-2 text-accent text-[.75rem] bg-accent-soft rounded-md"
          >
            {impact}
          </strong>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t  border-border">
        {project.tools.map((tool, index) => (
          <span key={tool} className="text-muted text-xs">
            {tool}
            {index < project.tools.length - 1 && (
              <span className="text-accent"> · </span>
            )}
          </span>
        ))}
      </div>

      {(project.github || project.website) && (
        <div className="flex justify-between mt-6 text-accent text-[.75rem] font-bold font-display">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              title="View on GitHub"
              aria-label="View on GitHub (opens in a new tab)"
              className="transition-[opacity,translate] duration-200 hover:opacity-[.8] hover:translate-y-px"
            >
              <Icon name="github" size={18} />
            </a>
          )}

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              title="View website"
              aria-label="View website (opens in a new tab)"
              className="transition-[opacity,translate] duration-200 hover:opacity-[.8] hover:translate-y-px"
            >
              <Icon name="website" size={18} />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

const Projects = () => {
  return (
    <div>
      <SectionHeading
        label="Projects"
        title="Systems designed for real impact."
        copy="A selection of systems I've designed, built, and shipped."
      />

      <div className="grid grid-cols-[1fr] md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
