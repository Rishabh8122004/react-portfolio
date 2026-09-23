import { useEffect, useState } from 'react'
import '../css_files/ThemeToggle.css'

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={
        darkMode ? 'Switch to light mode' : 'Switch to dark mode'
      }
      aria-pressed={darkMode}
    >
      <span className="theme-icon">☀️</span>

      <span className="theme-track"></span>

      <span className="theme-icon">🌙</span>

      <span
        className={
          darkMode
            ? 'theme-knob dark'
            : 'theme-knob'
        }
      ></span>
    </button>
  )
}

export default ThemeToggle