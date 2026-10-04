import profile from "../assets/profile.png"

const stats: { duration: string; detail: string }[] = [
  { duration: "2+", detail: "Years building software" },
  { duration: "1", detail: "Production-grade project" },
  { duration: "1", detail: "E2E ML implementation" },
]

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-[clamp(3rem,8vw,7.5rem)] place-items-center md:grid-cols-[minmax(260px,.75fr)_1.25fr] lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
      <div className="relative w-[calc(100%-3.5rem)] mx-auto sm:w-[82%] md:max-w-100">
        <div className="portrait-card relative overflow-hidden aspect-3.9/5 bg-surface-2 rounded-[1rem_3rem_1rem_3rem] shadow-card border-border border-10">
          <img
            src={profile}
            alt="Raheem Oluwatobiloba"
            className="w-full h-full m-0 object-cover object-top"
          />
        </div>

        <span className="absolute bottom-5 -right-3 flex items-center gap-2 py-2 px-3 text-muted bg-surface border border-border rounded-[10px] shadow-card text-[.75rem] font-bold sm:-right-4 sm:bottom-4 md:-right-5">
          <span className="w-2 h-2 bg-[rgb(0,201,80)] shadow-[0_0_0_4px_rgb(0,201,80,.2)] rounded-full" />
          Available
        </span>
      </div>

      <div>
        <p className="eyebrow">About me</p>
        <h2 className="m-0 font-display font-extrabold text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] tracking-tighter">
          Building reliable backend systems from 0 to production
        </h2>

        <p className="mt-6 text-foreground text-[1.2rem] leading-[1.75]">
          Backend-focused software engineer with 2+ years designing scalable
          APIs, distributed services, and zero-ETL data pipelines for enterprise
          domains.
        </p>

        <p className="mt-4 text-muted leading-[1.75]">
          From schema design and API architecture to deployment, observability,
          and monitoring, I build systems with Node.js, PostgreSQL, and
          cloud-native tooling. My work pairs clean interfaces with a strong
          focus on SLA Compliance.
        </p>

        <div className="grid grid-cols-3 gap-2 mt-8 pt-7 border-t border-border sm:gap-4">
          {stats.map((stat, index) => (
            <div key={`stat_${index}`} className="flex flex-col gap-1">
              <strong className="text-accent font-display font-extrabold text-[1.3rem] sm:text-[1.65rem]">
                {stat.duration}
              </strong>
              <span className="text-muted text-[.65rem] sm:text-[.75rem]">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
