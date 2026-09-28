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
