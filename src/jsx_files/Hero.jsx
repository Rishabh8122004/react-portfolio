import { Link } from 'react-router-dom'
import '../css_files/Hero.css'

function Hero() {
  return (
    <section className="hero">

      <article className="hero-content">
        <p className="hero-greeting">Hello, I’m</p>

        <h1>Rishabh Pareek</h1>

        <h2>Computer Science & Engineering (IoT) Student</h2>

        <p className="hero-description">
          I build web applications, solve programming problems, and enjoy
          learning how technology works from the fundamentals.
        </p>

        <nav className="hero-actions" aria-label="Hero navigation">
          <Link to="/projects" className="hero-button primary">
            View Projects
          </Link>

          <Link to="/contact" className="hero-button secondary">
            Contact Me
          </Link>

          <a
            href="/pdf_files/rishabh_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button secondary"
          >
            Resume
          </a>
        </nav>
      </article>

      <figure className="hero-image">
        <img
          src="/image/profile.jpg"
          alt="Portrait of Rishabh Pareek"
        />
      </figure>

    </section>
  )
}

export default Hero