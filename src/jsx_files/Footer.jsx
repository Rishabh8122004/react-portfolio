import '../css_files/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>© Rishabh_Pareek. All rights reserved.</p>

      <nav aria-label="Footer links">
        <a
          href="https://github.com/Rishabh8122004"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <span>|</span>

        <a
          href="https://www.linkedin.com/in/rishabh-pareek-6089a8275/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  )
}

export default Footer