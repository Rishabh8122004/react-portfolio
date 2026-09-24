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
      className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={
        darkMode ? 'Switch to light mode' : 'Switch to dark mode'
      }
      aria-pressed={darkMode}
    >
      <span className="theme-sky" aria-hidden="true">
        <span className="theme-stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span className="theme-sun"></span>
        <span className="theme-moon"></span>

        <span className="theme-horizon"></span>
      </span>
    </button>
  )
}

export default ThemeToggle