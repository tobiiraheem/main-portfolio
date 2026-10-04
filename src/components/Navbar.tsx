import { useState } from "react"
import Icon from "./Icon"
import { Theme, useTheme } from "../hooks/useTheme"

const navItems = [
  "About",
  "Experience",
  "Projects",
  "Research",
  "Skills",
  "Education",
  "Contact",
]

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between gap-8 px-[max(4vw,1.25rem)] bg-nav border-b border-border/70 backdrop-blur-[18px] shadow-card font-display md:h-18">
      <a
        href="#home"
        aria-label="Raheem Oluwatobiloba, home"
        className="flex items-center gap-3 no-underline"
      >
        <span className="grid place-items-center w-10 h-10 rounded-2xl text-[#06161c] bg-[#67d7cf] text-sm font-extrabold">
          RO
        </span>
        <strong className="hidden text-base sm:block">
          Raheem Oluwatobiloba
        </strong>
      </a>

      <nav
        aria-label="Main navigation"
        className={`flex flex-col items-stretch gap-0 p-2.5 fixed inset-x-4 top-16 bg-surface border border-border rounded-2xl shadow-card transition-all duration-200 lg:static lg:flex-row lg:items-center lg:gap-4 lg:p-0 lg:bg-transparent lg:border-0 lg:rounded-none lg:shadow-none lg:translate-y-0 lg:opacity-100 lg:visible xl:gap-6 ${openMenu ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpenMenu(false)}
            className="text-sm font-semibold text-muted transition-colors hover:text-accent py-3.5 px-4 rounded-lg hover:bg-surface-2 lg:py-0 lg:px-0 lg:rounded-none lg:hover:bg-transparent"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex gap-2">
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="grid place-items-center w-10 h-10 p-0 rounded-full text-foreground bg-surface border border-border  transition-all hover:text-accent hover:translate-y-px"
        >
          <Icon name={theme === Theme.dark ? "sun" : "moon"} />
        </button>
        <button
          aria-label="Toggle menu"
          aria-expanded={openMenu}
          onClick={() => setOpenMenu(!openMenu)}
          className="grid place-items-center w-10 h-10 p-0 rounded-full text-foreground bg-surface border border-border transition-all hover:text-accent hover:translate-y-px lg:hidden"
        >
          <Icon name={openMenu ? "close" : "menu"} />
        </button>
      </div>
    </header>
  )
}
export default Navbar
