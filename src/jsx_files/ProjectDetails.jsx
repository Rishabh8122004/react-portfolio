import { Link, useParams } from 'react-router-dom'
import '../css_files/ProjectDetails.css'

function ProjectDetails() {
  const { id } = useParams()

  return (
    <section className="project-details-page">
      <p>Project ID: {id}</p>

      <h1>Project Details</h1>

      <p>
        Detailed project information will be displayed here.
      </p>

      <Link to="/projects" className="project-details-button">
        Back to Projects
      </Link>
    </section>
  )
}

export default ProjectDetails