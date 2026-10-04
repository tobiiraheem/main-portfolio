import type { ReactNode } from "react"

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  alternate?: boolean
}

export function Section(props: SectionProps) {
  console.log("props =>> ", props)
  return (
    <section
      id={props.id}
      className={`relative isolate py-[clamp(5rem,9vw,8rem)] 
        ${!props.alternate ? "section-bg" : "section-alt-bg"} 
        ${props.className ?? ""}`}
    >
      <div className="w-[min(1160px,calc(100%-2.5rem))] mx-auto">
        {props.children}
      </div>
    </section>
  )
}
