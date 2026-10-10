import Icon from "./Icon"
import { SectionHeading } from "./Section"

type ResearchItem = {
  date: string
  status: "in-progress" | "published"
  title: string
  category: string
  journal?: string
  description: string
  website?: string
}

const researchItems: ResearchItem[] = [
  {
    date: "",
    status: "in-progress",
    title: "GambitCNN: ResNet-Inspired Audio Classification",
    category: "Deep Learning · Audio Classification",
    description:
      "An end-to-end implementation of a residual convolutional neural network for environmental sound classification. The project explores Mel spectrogram representations, residual learning, model training, and evaluation on the ESC-50 dataset, with plans to document the implementation and experimental findings.",
  },
]

const ResearchCard = ({ research }: { research: ResearchItem }) => {
  const inProgress = research.status === "in-progress"
  return (
    <article className="grid grid-cols-[1fr_auto] gap-4 items-start py-8 border-b border-b-border md:grid-cols-[.8fr_2.5fr_auto] md:gap-8">
      <div className="flex flex-col gap-2 col-span-full md:col-span-1">
        <time
          className={`text-accent ${inProgress ? "font-extralight" : "font-bold"}`}
        >
          {inProgress ? "In progress" : research.date}
        </time>
        {research.journal && (
          <span className="text-muted text-[.75rem]">{research.journal}</span>
        )}
      </div>

      <div>
        <h3 className="text-[1.08rem] sm:text-[1.25rem] leading-[1.4] font-bold font-display">
          {research.title}
        </h3>
        <p className="mt-3 text-muted leading-[1.7]">{research.description}</p>
      </div>

      {research.website?.length && (
        <a
          href={research.website}
          target="_blank"
          rel="noreferrer"
          aria-label={`Read publication: ${research.title}`}
          className="grid place-items-center w-10 h-10 text-accent border border-border rounded-full transition-[opacity,translate] duration-20 hover:opacity-[.8] hover:translate-y-px"
        >
          <Icon name="external" />
        </a>
      )}
    </article>
  )
}

const Research = () => {
  return (
    <div>
      <SectionHeading
        label="Research & Experiment"
        title="Exploring machine learning through implementation."
        copy="Reproducing research ideas, building ML systems, and documenting experimental findings in deep learning and computational methods."
      />

      <div className="border-t border-t-border px-6 bg-research-card-bg border border-research-card-border rounded-2xl shadow-research-card">
        {researchItems.map((researchItem, index) => (
          <ResearchCard key={index} research={researchItem} />
        ))}
      </div>
    </div>
  )
}

export default Research
