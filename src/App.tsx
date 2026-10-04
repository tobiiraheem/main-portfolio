import { BrowserRouter } from "react-router-dom"

import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  TechStack,
  Works,
} from "./components"
import { Section } from "./components/Section"

const App = () => {
  return (
    <BrowserRouter>
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
        {/* <Experience /> */}
        <Section id="tech" alternate>
          <TechStack />
        </Section>
        <Section id="works">
          <Works />
        </Section>
        <Section id="feedbacks" alternate>
          <Feedbacks />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
    </BrowserRouter>
  )
}

export default App
