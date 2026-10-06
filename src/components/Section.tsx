import type { ReactNode } from "react"

type SectionProps = {
  id?: string
  children?: ReactNode
  className?: string
  alternate?: boolean
  head?: { label: string }
  heading?: { label: string; title: string; copy: string }
}

type SectionHeadingProps = { label: string; title: string; copy?: string }

export function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      className={`relative isolate py-[clamp(5rem,9vw,8rem)] ${!props.alternate ? "section-bg" : "section-alt-bg"}${props.className ?? ""}`}
    >
      <div className="section-container">{props.children}</div>
    </section>
  )
}

export function SectionHeading(props: SectionHeadingProps) {
  return (
    <div className="grid grid-cols-[1fr] gap-1 mb-13 md:grid-cols-[.7fr_2fr] md:gap-8  ">
      <p className="eyebrow">{props.label}</p>
      <div>
        <h2 className="section-heading">{props.title}</h2>
        {props.copy && (
          <p className="max-w-157.5 mt-4 text-muted text-[1rem] leading-[1.7]">
            {props.copy}
          </p>
        )}
      </div>
    </div>
  )
}
