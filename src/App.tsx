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
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
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
      </div>
    </BrowserRouter>
  )
}

export default App
