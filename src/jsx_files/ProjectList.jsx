/* ==================================================
   PROJECT LIST
   WEEK 4 REACT PORTFOLIO
   CIRCULAR 3D PROJECT GALLERY
================================================== */

import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import '../css_files/ProjectList.css'

function ProjectList({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [projects.length])

  if (projects.length === 0) {
    return (
      <p className="no-projects">
        No projects found. Try a different search or category.
      </p>
    )
  }

  const totalProjects = projects.length

  /*
    Every project gets a position relative to
    the currently active project.

    Example with 6 projects:

       -2   -1    0    +1   +2
             LEFT CENTER RIGHT
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

  /*
    Arrow behaviour:

    → brings the LEFT project to the centre.
    ← brings the RIGHT project to the centre.

    This matches the visual direction of the
    cylindrical movement we want.
  */

  const moveProject = (direction) => {
    setActiveIndex((currentIndex) => {
      let nextIndex = currentIndex - direction

      if (nextIndex < 0) {
        nextIndex = totalProjects - 1
      }

      if (nextIndex >= totalProjects) {
        nextIndex = 0
      }

      return nextIndex
    })
  }

  return (
    <section className="project-gallery">

      <header className="project-gallery-header">
        <p>Navigate the collection</p>

        <p>
          {String(activeIndex + 1).padStart(2, '0')}
          {' / '}
          {String(totalProjects).padStart(2, '0')}
        </p>
      </header>

      <section
        className="project-gallery-stage"
        aria-label="Project collection"
      >

        <button
          type="button"
          className="project-gallery-arrow project-gallery-arrow-left"
          onClick={() => moveProject(-1)}
          aria-label="Move cylinder left"
        >
          ←
        </button>

        <section className="project-cylinder">

          {projects.map((project, index) => {
            const position = getCircularPosition(index)

            return (
              <article
                key={project.name}
                className={`project-cylinder-item position-${position}`}
                style={{
                  '--project-position': position,
                  '--project-index': index,
                  '--project-count': totalProjects,
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </article>
            )
          })}

        </section>

        <button
          type="button"
          className="project-gallery-arrow project-gallery-arrow-right"
          onClick={() => moveProject(1)}
          aria-label="Move cylinder right"
        >
          →
        </button>

      </section>

    </section>
  )
}

export default ProjectList