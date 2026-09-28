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

        <div>
          <About />
          {/* <Experience />
            {/* <Experience /> */}
          <TechStack />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
