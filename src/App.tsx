import {
  About,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  Skills,
  Projects,
  Research,
} from "./components"
import { Section } from "./components/Section"

const App = () => {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 -top-20 z-100 py-3 px-4 bg-surface border border-border rounded-md text-foreground font-semibold shadow-card focus:top-4 transition-[top]"
      >
        Skip
      </a>
      <Navbar />

      <main id="main">
        <Hero />
        <Section id="about">
          <About />
        </Section>

        <Section id="experience" alternate>
          <Experience />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="research" alternate>
          <Research />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="education" alternate>
          <Education />
        </Section>

        <Section
          id="contact"
          className="bg-[#087e8b] contact-section-bg text-[#edfaff]"
        >
          <Contact />
        </Section>
      </main>

      <footer className="py-5 px-[max(4vw,1.25rem)] text-[#9fb3c2] bg-[#07111f]">
        <div className="flex flex-col gap-2 justify-between items-center text-[.6rem] sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Raheem Oluwatobiloba</p>
          <a
            href="#home"
            className="flex items-center content-center gap-2 text-[#72ddd4]"
          >
            Back to top
            <span
              className="block w-px h-3 bg-linear-to-t from-accent-2 to-transparent animate-scroll-pulse-inverted"
              aria-hidden="true"
            />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
