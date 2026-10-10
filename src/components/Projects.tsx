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
      ">2.3x API throughput",
      "-40% DB query execution time",
    ],
    points: [
      "Developed a proprietary multi-product, multi-tier, region-based product subscription system with provisions for auto-renewals, cancellations, and refunds.",
      "Using a test-driven approach, I Implemented, migrated, and maintained backend services and API functionality supporting the platform's product features.",
    ],
    tools: ["AdonisJS", "PostgreSQL", "Redis", "Docker", "PgBoss"],
    website: "about.gotedo.com",
  },
  {
    title: "GambitCNN",
    type: "Deep Learning · Environmental Sound Classification",
    description:
      "A ResNet-inspired convolutional neural network for environmental sound classification using PyTorch, transforming audio recordings into Mel spectrograms for 50-class classification on the ESC-50 dataset.",
    impacts: [
      "81.75% validation accuracy",
      "50-class classification",
      "GPU-accelerated training",
    ],
    points: [
      "Built an end-to-end audio classification pipeline covering dataset preparation, audio preprocessing, Mel spectrogram generation, model training, and inference.",
      "Implemented residual learning blocks inspired by ResNet to train a convolutional neural network on spectrogram representations of environmental audio.",
      "Trained and evaluated the model on a 1,600-sample training split and a 400-sample validation split, reaching 81.75% validation accuracy at epoch 88.",
      // "Developed a GPU-based training workflow on cloud infrastructure and worked toward reproducible experiments through deterministic seeding and checkpoint-based training.",
    ],
    tools: [
      "Python",
      "PyTorch",
      "torchaudio",
      "CNN",
      "ResNet",
      "ESC-50",
      "CUDA",
      "Hugging Face",
    ],
    github: "https://github.com/tobiiraheem/gambit_cnn",
  },
]

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <article className="project-card flex flex-col p-[clamp(1.5rem,3vw,2.2rem)] border rounded-2xl shadow-[0_15px_45px_rgba(32,58,90,0.05)] transition-[transform,box-shadow,border-color] duration-25 overflow-hidden hover:-translate-y-2 hover:border-accent hover:shadow-card">
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
        {project.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.impacts.map((impact, index) => (
          <strong
            key={index}
            className="py-1 px-2 text-accent text-[.75rem] bg-accent-soft rounded-md"
          >
            {impact}
          </strong>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t  border-t-border">
        {project.tools.map((tool, index) => (
          <span
            key={index}
            className="text-muted text-[.75rem] after:content-['.'] after:text-accent"
          >
            {tool}
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
              className="transition-[opacity,translate] duration-20 hover:opacity-[.8] hover:translate-y-px"
            >
              <Icon name="github" size={18} />
            </a>
          )}

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="transition-[opacity,translate] duration-20 hover:opacity-[.8] hover:translate-y-px"
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
        title="Systems designed for real impact"
        copy="A selection of systems I've designed, built, and shipped."
      />

      <div className="grid grid-cols-[1fr] md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
