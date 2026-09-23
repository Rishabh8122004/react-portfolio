/* ==================================================
   PROJECT LIST
   WEEK 4 REACT PORTFOLIO
   PROJECT GALLERY (SHALLOW 3D ARC)
================================================== */

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard.jsx'
import '../css_files/ProjectList.css'

const SWIPE_DISTANCE = 50

function ProjectList({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0)

  /*
    Refs store values that must survive between renders
    but should NOT cause a re-render when they change.
  */
  const swipeStartX = useRef(null)
  const swipeHappened = useRef(false)

  const totalProjects = projects.length
  const activeProject = projects[activeIndex]

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % totalProjects)
  }

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + totalProjects) % totalProjects
    )
  }

  /*
    Position of a project relative to the active one:

      -2   -1    0    +1   +2
  */
  const getCircularPosition = (index) => {
    let position = index - activeIndex

    const half = totalProjects / 2

    if (position > half) {
      position -= totalProjects
    }

    if (position < -half) {
      position += totalProjects
    }

    return position
  }

  const formatNumber = (number) => String(number).padStart(2, '0')

  /* ---------- Keyboard ---------- */

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious()
    }

    if (event.key === 'ArrowRight') {
      goToNext()
    }
  }

  /* ---------- Swipe (touch and mouse) ---------- */

  const handlePointerDown = (event) => {
    swipeStartX.current = event.clientX
    swipeHappened.current = false
  }

  const handlePointerUp = (event) => {
    if (swipeStartX.current === null) {
      return
    }

    const distance = event.clientX - swipeStartX.current

    swipeStartX.current = null

    if (Math.abs(distance) < SWIPE_DISTANCE) {
      return
    }

    swipeHappened.current = true

    if (distance < 0) {
      goToNext()
    } else {
      goToPrevious()
    }
  }

  const handlePointerCancel = () => {
    swipeStartX.current = null
  }

  /* ---------- Clicking / focusing a card ---------- */

  const handleItemClick = (event, index, position) => {
    /* The click at the end of a swipe must not select a card */
    if (swipeHappened.current) {
      event.preventDefault()
      event.stopPropagation()
      swipeHappened.current = false
      return
    }

    /* Clicking a side card brings it to the centre */
    if (position !== 0) {
      event.preventDefault()
      event.stopPropagation()
      setActiveIndex(index)
    }
  }

  /* Tabbing (keyboard) into a side card brings it to the centre */
  const handleItemFocus = (event, index, position) => {
    if (position !== 0 && event.target.matches(':focus-visible')) {
      setActiveIndex(index)
    }
  }

  return (
    <section
      className="project-gallery"
      aria-label="Project collection"
      onKeyDown={handleKeyDown}
    >

      {/*
        The focus header does not rotate with the cards.
        The key makes React rebuild the title whenever the
        active project changes, which replays the fade-in.
      */}
      <header className="project-focus" aria-live="polite">
        <h2
          key={activeProject.id}
          className="project-focus-title"
        >
          {activeProject.name}
        </h2>

        <Link
          to={`/project/${activeProject.id}`}
          className="project-focus-link"
        >
          Explore project
        </Link>
      </header>

      <button
        type="button"
        className="project-gallery-arrow project-gallery-arrow-left"
        onClick={goToPrevious}
        disabled={totalProjects < 2}
        aria-label="Previous project"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M15 5l-7 7 7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ul
        className="project-cylinder"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {projects.map((project, index) => {
          const position = getCircularPosition(index)

          return (
            <li
              key={project.id}
              className={`project-cylinder-item position-${position}`}
              style={{ '--project-position': position }}
              onClickCapture={(event) =>
                handleItemClick(event, index, position)
              }
              onFocusCapture={(event) =>
                handleItemFocus(event, index, position)
              }
            >
              <ProjectCard project={project} index={index} />
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        className="project-gallery-arrow project-gallery-arrow-right"
        onClick={goToNext}
        disabled={totalProjects < 2}
        aria-label="Next project"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M9 5l7 7-7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className="project-gallery-counter">
        {formatNumber(activeIndex + 1)} / {formatNumber(totalProjects)}
      </p>

    </section>
  )
}

export default ProjectList