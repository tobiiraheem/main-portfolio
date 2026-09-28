import Icon from "./Icon"

const heroTags = ["Distributed systems", "DevOps", "Intelligent systems"]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-svh grid place-items-center px-6 pt-32 pb-24 overflow-hidden bg-background sm:px-6 md:pt-32 md:pb-24"
    >
      <div className="hero-bg" aria-hidden="true" />

      <div className="w-full max-w-232.5 min-w-0 text-center">
        <p className="eyebrow flex justify-center items-center gap-[.65rem] text-accent-2">
          <span className="w-6.5 h-px bg-current" aria-hidden="true" />
          Software Engineer
        </p>

        <h1 className="m-0 font-extrabold font-display text-[clamp(3.2rem,17vw,4.2rem)] leading-[.93] tracking-[-.075em] sm:text-[clamp(3.6rem,19vw,6rem)] md:text-[clamp(4.2rem,12vw,9rem)] md:tracking-tighter">
          Raheem Oluwatobiloba
        </h1>

        <p className="max-w-177.5 mx-auto mt-7 mb-0 text-muted text-base leading-[1.65] sm:text-[clamp(1.05rem,2vw,1.45rem)]">
          I build secure and scalable backend systems that handle complex
          operations and produce measurable outcomes.
        </p>

        <div className="flex flex-col justify-center gap-3 mt-9 sm:flex-row sm:flex-wrap">
          {heroTags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-3 mt-9">
          <a className="button button-primary" href="#projects">
            View my works <Icon name="arrow" />
          </a>
          <a
            href="/Raheem_Oluwatobiloba.pdf"
            download
            className="button button-secondary"
          >
            Download résumé <Icon name="download" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[.65rem] text-muted no-underline text-[.64rem] tracking-[.16em] uppercase"
      >
        <span>Scroll</span>
        <i
          className="block w-px h-8.5 bg-linear-to-b from-accent-2 to-transparent animate-scroll-pulse"
          aria-hidden="true"
        />
      </a>
    </section>
  )
}

export default Hero
