import { SectionHeading } from "./Section"

const languages = ["English", "Yoruba", "Ebira"]

const Education = () => {
  return (
    <div>
      <SectionHeading
        label="Education"
        title="A good foundation in mathematics."
      />

      <div className="grid grid-cols-[1fr] justify-center gap-5">
        <article className="relative p-8 border rounded-2xl education-card">
          <span className="text-accent text-[.75rem] font-bold">2023.</span>
          <h3 className="mt-4 mb-2 font-display font-bold text-[1.25rem]">
            BSc. Mathematics
          </h3>
          <p className="m-0 text-muted">
            Federal University of Agriculture, Abeokuta
          </p>
          <small className="block mt-3 text-muted">Ogun, Nigeria</small>
        </article>
      </div>

      <div className="flex flex-col gap-3 mt-6 sm:gap-16  sm:flex-row sm:items-center ">
        <span className="text-muted text-[.75rem] font-bold tracking-widest uppercase">
          Languages
        </span>
        <div className="flex flex-wrap items-center gap-4">
          {languages.map((language, index) => (
            <p
              key={index}
              className="m-0 text-muted py-2 px-3 bg-surface border border-border rounded-2xl text-[.75rem]"
            >
              {language}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
