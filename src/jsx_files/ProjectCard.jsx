/* ==================================================
   PROJECT CARD
   WEEK 4 REACT PORTFOLIO
   PROJECT LAB
================================================== */

import '../css_files/ProjectCard.css'

function ProjectVisual({ project }) {
  switch (project.name) {
    case 'Tic Tac Toe':
      return (
        <figure className="project-visual tic-tac-toe-visual">
          <header className="visual-label">
            <small>01 / GAME LOGIC</small>
            <small>2 PLAYER</small>
          </header>

          <section
            className="tic-tac-toe-board"
            aria-label="Tic Tac Toe board"
          >
            <strong>X</strong>
            <strong>O</strong>
            <strong></strong>

            <strong></strong>
            <strong>X</strong>
            <strong></strong>

            <strong>O</strong>
            <strong></strong>
            <strong>X</strong>
          </section>

          <figcaption>
            <strong>WIN CONDITION</strong>
            <small>Three in a row</small>
          </figcaption>
        </figure>
      )

    case 'Number Conversion System':
      return (
        <figure className="project-visual conversion-visual">
          <header className="visual-label">
            <small>02 / NUMBER SYSTEMS</small>
            <small>BASE CONVERSION</small>
          </header>

          <section className="conversion-flow">
            <article>
              <code>101101</code>
              <small>BINARY</small>
            </article>

            <strong>→</strong>

            <article>
              <code>45</code>
              <small>DECIMAL</small>
            </article>

            <strong>→</strong>

            <article>
              <code>2D</code>
              <small>HEX</small>
            </article>
          </section>

          <figcaption>
            Positional values become a system of translation.
          </figcaption>
        </figure>
      )

    case 'Hospital Management System':
      return (
        <figure className="project-visual hospital-visual">
          <header className="visual-label">
            <small>03 / PRIORITY SYSTEM</small>
            <small>HEAP</small>
          </header>

          <section className="hospital-queue">
            <article className="queue-item queue-item-primary">
              <small>01</small>
              <strong>09:00</strong>
              <p>Next appointment</p>
            </article>

            <article className="queue-item">
              <small>02</small>
              <strong>10:30</strong>
              <p>Scheduled</p>
            </article>

            <article className="queue-item">
              <small>03</small>
              <strong>12:00</strong>
              <p>Scheduled</p>
            </article>
          </section>

          <figcaption>
            Priority determines what rises to the top.
          </figcaption>
        </figure>
      )

    case 'Personal Portfolio':
      return (
        <figure className="project-visual portfolio-visual">
          <header className="visual-label">
            <small>04 / FIRST BUILD</small>
            <small>HTML + CSS</small>
          </header>

          <section className="browser-frame">
            <header className="browser-bar">
              <small></small>
              <small></small>
              <small></small>

              <code>rishabh / portfolio</code>
            </header>

            <section className="browser-content">
              <small>HELLO, I AM</small>

              <strong>RISHABH</strong>

              <p>
                Building from the fundamentals.
              </p>

              <footer>
                <small>HTML</small>
                <small>CSS</small>
              </footer>
            </section>
          </section>

          <figcaption>
            The beginning of the web development journey.
          </figcaption>
        </figure>
      )

    case 'JavaScript Interactive Portfolio':
      return (
        <figure className="project-visual javascript-visual">
          <header className="visual-label">
            <small>05 / INTERACTION</small>
            <small>JAVASCRIPT</small>
          </header>

          <section className="code-environment">
            <header>
              <small>script.js</small>
              <small>● RUNNING</small>
            </header>

            <code>
              <strong>const</strong> portfolio = {'{'}
            </code>

            <code>
              &nbsp;&nbsp;interactive: <strong>true</strong>,
            </code>

            <code>
              &nbsp;&nbsp;dynamic: <strong>true</strong>,
            </code>

            <code>
              &nbsp;&nbsp;api: <strong>true</strong>,
            </code>

            <code>
              &nbsp;&nbsp;storage: <strong>true</strong>
            </code>

            <code>{'}'}</code>
          </section>

          <figcaption>
            From static pages to behaviour and interaction.
          </figcaption>
        </figure>
      )

    case 'DSA Problem Solving':
      return (
        <figure className="project-visual dsa-visual">
          <header className="visual-label">
            <small>06 / PROBLEM SOLVING</small>
            <small>C++ + DSA</small>
          </header>

          <section className="dsa-main">
            <article className="dsa-count">
              <strong>850+</strong>
              <small>PROBLEMS SOLVED</small>
            </article>

            <section className="dsa-structure">
              <article>
                <strong></strong>
                <strong></strong>
                <strong></strong>
              </article>

              <article>
                <strong></strong>
                <strong></strong>
              </article>

              <article>
                <strong></strong>
              </article>
            </section>
          </section>

          <figcaption>
            Arrays · Trees · DP · Searching · More
          </figcaption>
        </figure>
      )

    default:
      return (
        <figure className="project-visual default-project-visual">
          <header className="visual-label">
            <small>PROJECT</small>
          </header>

          <strong>BUILD / EXPLORE</strong>

          <figcaption>
            Explore the implementation.
          </figcaption>
        </figure>
      )
  }
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <header className="project-card-header">
        <p className="project-number">
          {String(index + 1).padStart(2, '0')}
        </p>

        <p className="project-category">
          {project.category}
        </p>
      </header>

      <ProjectVisual project={project} />

      <section className="project-card-content">
        <h3 className="visually-hidden">{project.name}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <ul className="project-technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default ProjectCard