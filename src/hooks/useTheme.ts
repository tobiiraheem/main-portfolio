import { useEffect, useState } from "react"

export enum Theme {
  dark = "dark",
  light = "light",
}

export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(() => {
    let existingTheme = localStorage.getItem("theme") as Theme | null
    if (existingTheme && Object.values(Theme).includes(existingTheme)) {
      return existingTheme
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? Theme.dark
      : Theme.light
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return {
    theme,
    toggle: () =>
      setTheme((t) => (t === Theme.dark ? Theme.light : Theme.dark)),
  }
}
